import { useState } from "react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import { ExplorePage } from "./ExplorePage";
import { ProfilePage } from "./ProfilePage";
import { InboxPage } from "./InboxPage";
import { PetEditor } from "./PetEditor";

type CurrentView = "explore" | "profile" | "inbox" | "editor";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"explore" | "profile" | "inbox">("explore");
  const [currentView, setCurrentView] = useState<CurrentView>("explore");
  const [xp] = useState(75);
  const [maxXp] = useState(100);
  const [level] = useState(3);

  const handleTabChange = (tab: "explore" | "profile" | "inbox") => {
    setActiveTab(tab);
    setCurrentView(tab);
  };

  const handleAddPress = () => {
    // Handle add new pet/playdate logic
    console.log("Add new action");
  };

  const handleEditPet = () => {
    setCurrentView("editor");
  };

  const handleBackFromEditor = () => {
    setCurrentView("profile");
    setActiveTab("profile");
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "explore":
        return <ExplorePage />;
      case "profile":
        return <ProfilePage onEditPet={handleEditPet} />;
      case "inbox":
        return <InboxPage />;
      case "editor":
        return <PetEditor onBack={handleBackFromEditor} />;
      default:
        return <ExplorePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-main opacity-90 -z-10" />
      <div className="fixed top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="fixed top-32 right-8 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-bounce-gentle" />
      <div className="fixed bottom-40 left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse-soft" />

      {currentView !== "editor" && (
        <Header xp={xp} maxXp={maxXp} level={level} />
      )}
      
      <main className="flex-1 flex flex-col">
        {renderCurrentView()}
      </main>

      {currentView !== "editor" && (
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
          onAddPress={handleAddPress}
        />
      )}
    </div>
  );
};

export default Index;
