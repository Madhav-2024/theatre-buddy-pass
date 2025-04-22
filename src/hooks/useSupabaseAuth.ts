
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

// The supabase client is now imported from the official client file, 
// which already has the correct URL and key from the environment variables

export interface UserData {
  id?: string;
  full_name: string;  // Changed from name to full_name to match database
  email: string;
  created_at?: string;
  updated_at?: string;
  phone?: string;
  loyalty_tier?: string;
  points?: number;
  shows_attended?: number;
}

export const useSupabaseAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  // Register a new user
  const register = async (fullName: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      // 1. Sign up the user with Supabase auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        throw authError;
      }

      if (!authData.user) {
        throw new Error('User registration failed');
      }

      // 2. Store additional user info in the users table
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,
          full_name: fullName,  // Changed from name to full_name
          email,
        });

      if (profileError) {
        throw profileError;
      }

      // 3. Create an entry in loyalty_points for the new user
      const { error: loyaltyError } = await supabase
        .from('loyalty_points')
        .insert({
          user_id: authData.user.id,
          points_balance: 0,
          shows_attended: 0,
          tier: 'Bronze',
        });

      if (loyaltyError) {
        console.error('Could not create loyalty record:', loyaltyError);
        // We won't throw here, as we've already created the user
      }

      // 3. Set the user state
      setUser({
        id: authData.user.id,
        full_name: fullName,  // Changed from name to full_name
        email,
        created_at: new Date().toISOString(),
        loyalty_tier: 'Bronze',
        points: 0,
        shows_attended: 0
      });
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Registration error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Log in an existing user
  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      // 1. Sign in the user
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) {
        throw authError;
      }

      if (!authData.user) {
        throw new Error('Login failed');
      }

      // 2. Fetch user profile data from the users table
      const { data: profileData, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (profileError) {
        throw profileError;
      }

      // 3. Set the user state
      setUser({
        id: profileData.id,
        full_name: profileData.full_name,  // Changed from name to full_name
        email: profileData.email,
        created_at: profileData.created_at,
        updated_at: profileData.updated_at,
        phone: profileData.phone
      });
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Login error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Log out the user
  const logout = async (): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }

      setUser(null);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Logout error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Check if user is already logged in
  const checkSession = async () => {
    setLoading(true);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        // Fetch user profile data
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();
          
        if (error) {
          throw error;
        }
        
        setUser({
          id: data.id,
          full_name: data.full_name,  // Changed from name to full_name
          email: data.email,
          created_at: data.created_at,
          updated_at: data.updated_at,
          phone: data.phone
        });
      }
    } catch (err) {
      console.error('Session check error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
    checkSession
  };
};
