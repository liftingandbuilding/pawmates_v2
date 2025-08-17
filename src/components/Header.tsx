import { Star } from "lucide-react";

interface HeaderProps {
  xp: number;
  maxXp: number;
  level: number;
}

export const Header = ({ xp, maxXp, level }: HeaderProps) => {
  const xpPercentage = (xp / maxXp) * 100;

  return (
    <div className="flex items-center justify-between p-4 bg-card/60 backdrop-blur-sm border-b border-white/20">
      <div className="flex-1">
        <h1 className="font-pixel text-primary text-lg animate-bounce-gentle">
          PawMates
        </h1>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 w-32">
        <div className="text-center mb-1">
          <span className="font-pixel text-xs text-secondary-foreground">
            Level {level}
          </span>
        </div>
        <div className="relative bg-card/80 rounded-full h-4 border-2 border-white/30 overflow-hidden shadow-inset">
          <div 
            className="h-full bg-gradient-green rounded-full transition-all duration-700 ease-bounce relative"
            style={{ width: `${xpPercentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-soft" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-pixel text-xs text-foreground drop-shadow-sm">
              {xp}/{maxXp}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex justify-end">
        <div className="bg-gradient-pink p-2 rounded-full shadow-soft animate-float">
          <Star className="w-5 h-5 text-primary-foreground" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};