
import React from 'react';
import { Award, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserData } from "@/hooks/useSupabaseAuth";

interface LoyaltyProgramStatusProps {
  user: UserData;
}

const LoyaltyProgramStatus: React.FC<LoyaltyProgramStatusProps> = ({ user }) => {
  const currentPoints = user.points || 0;
  const pointsToNextTier = user.loyalty_tier === 'Bronze' ? 2000 - currentPoints : 
                           user.loyalty_tier === 'Silver' ? 4000 - currentPoints : 0;
  const progressPercent = pointsToNextTier > 0 
    ? (currentPoints / (currentPoints + pointsToNextTier)) * 100
    : 100;

  return (
    <Card>
      <CardHeader className="pb-2">
        <h2 className="text-xl font-bold">Loyalty Program Status</h2>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Award className={`h-6 w-6 mr-2 ${
              user.loyalty_tier === "Gold" 
                ? "text-theatre-gold" 
                : user.loyalty_tier === "Silver" 
                ? "text-[#c0c0c0]" 
                : "text-[#cd7f32]"
            }`} />
            <h3 className="font-bold">{user.loyalty_tier || 'Bronze'} Tier Member</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Enjoy {user.loyalty_tier === "Gold" ? "30%" : user.loyalty_tier === "Silver" ? "20%" : "10%"} off 
            select performances and exclusive benefits.
          </p>
          
          <div className="bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
            <div 
              className={`h-full ${
                user.loyalty_tier === "Gold" 
                  ? "bg-theatre-gold" 
                  : user.loyalty_tier === "Silver" 
                  ? "bg-[#c0c0c0]" 
                  : "bg-[#cd7f32]"
              }`}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>Points: {currentPoints}</span>
            {user.loyalty_tier !== "Gold" && (
              <span>{pointsToNextTier} points to {user.loyalty_tier === "Silver" ? "Gold" : "Silver"} tier</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoyaltyProgramStatus;
