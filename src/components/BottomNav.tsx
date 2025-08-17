import { PawPrint, User, Mail, Plus } from "lucide-react";

interface BottomNavProps {
  activeTab: "explore" | "profile" | "inbox";
  onTabChange: (tab: "explore" | "profile" | "inbox") => void;
  onAddPress?: () => void;
}

export const BottomNav = ({ activeTab, onTabChange, onAddPress }: BottomNavProps) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-white/20 p-2">
        <div className="flex justify-around items-center">
          <button
            onClick={() => onTabChange("explore")}
            className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
              activeTab === "explore"
                ? "bg-primary/20 scale-110"
                : "hover:bg-white/10"
            }`}
          >
            <PawPrint 
              className={`w-6 h-6 ${
                activeTab === "explore" ? "text-primary" : "text-muted-foreground"
              }`}
              fill={activeTab === "explore" ? "currentColor" : "none"}
            />
            <span 
              className={`text-xs font-body mt-1 ${
                activeTab === "explore" ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Explore
            </span>
          </button>

          <button
            onClick={() => onTabChange("profile")}
            className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
              activeTab === "profile"
                ? "bg-primary/20 scale-110"
                : "hover:bg-white/10"
            }`}
          >
            <User 
              className={`w-6 h-6 ${
                activeTab === "profile" ? "text-primary" : "text-muted-foreground"
              }`}
              fill={activeTab === "profile" ? "currentColor" : "none"}
            />
            <span 
              className={`text-xs font-body mt-1 ${
                activeTab === "profile" ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Profile
            </span>
          </button>

          <button
            onClick={() => onTabChange("inbox")}
            className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 relative ${
              activeTab === "inbox"
                ? "bg-primary/20 scale-110"
                : "hover:bg-white/10"
            }`}
          >
            <div className="relative">
              <Mail 
                className={`w-6 h-6 ${
                  activeTab === "inbox" ? "text-primary" : "text-muted-foreground"
                }`}
                fill={activeTab === "inbox" ? "currentColor" : "none"}
              />
              <div className="absolute -top-1 -right-1 bg-gradient-pink rounded-full p-0.5">
                <PawPrint className="w-3 h-3 text-primary-foreground" fill="currentColor" />
              </div>
            </div>
            <span 
              className={`text-xs font-body mt-1 ${
                activeTab === "inbox" ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Inbox
            </span>
          </button>
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={onAddPress}
        className="fixed bottom-20 right-4 w-14 h-14 bg-gradient-pink rounded-full shadow-float 
                   flex items-center justify-center transition-all duration-300 ease-bounce
                   hover:scale-110 active:scale-95 animate-float"
      >
        <Plus className="w-7 h-7 text-primary-foreground" strokeWidth={3} />
      </button>
    </>
  );
};