
import React from 'react';
import { User, Award, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserData } from "@/hooks/useSupabaseAuth";

interface ProfileOverviewProps {
  user: UserData;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <h2 className="text-xl font-bold">Profile Information</h2>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">
          <div className="bg-theatre-navy text-white rounded-full w-16 h-16 flex items-center justify-center mr-4">
            <User className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{user.full_name}</h3>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Member Since:</span>
            <span>{user.created_at ? new Date(user.created_at).toLocaleDateString() : 'New Member'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shows Attended:</span>
            <span>{user.shows_attended || 0}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Loyalty Tier:</span>
            <Badge className={
              user.loyalty_tier === "Gold" 
                ? "bg-theatre-gold text-theatre-navy" 
                : user.loyalty_tier === "Silver" 
                ? "bg-[#c0c0c0] text-theatre-navy" 
                : "bg-[#cd7f32] text-white"
            }>
              {user.loyalty_tier || 'Bronze'}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileOverview;
