import { useState } from "react";
import { ArrowLeft, Camera, Save, PawPrint } from "lucide-react";
import petCorgi from "../assets/pet-corgi.png";

interface PetEditorProps {
  onBack: () => void;
}

export const PetEditor = ({ onBack }: PetEditorProps) => {
  const [petData, setPetData] = useState({
    name: "Mochi",
    breed: "Corgi", 
    age: "2",
    avatar: petCorgi,
    activities: ["ball", "park", "snack"],
    traits: ["playful", "friendly"],
    availability: {
      days: ["mon", "wed", "fri", "sun"],
      time: "afternoon"
    }
  });

  const activities = [
    { id: "ball", label: "Playing Ball", icon: "🎾" },
    { id: "park", label: "Park Walks", icon: "🌳" },
    { id: "nap", label: "Nap Time", icon: "💤" },
    { id: "snack", label: "Treat Time", icon: "🦴" },
    { id: "swim", label: "Swimming", icon: "🏊‍♂️" },
    { id: "training", label: "Training", icon: "🎯" }
  ];

  const traits = [
    { id: "playful", label: "Playful" },
    { id: "friendly", label: "Friendly" },
    { id: "shy", label: "Shy" },
    { id: "curious", label: "Curious" },
    { id: "energetic", label: "Energetic" },
    { id: "calm", label: "Calm" }
  ];

  const days = [
    { id: "mon", label: "Mon" },
    { id: "tue", label: "Tue" },
    { id: "wed", label: "Wed" },
    { id: "thu", label: "Thu" },
    { id: "fri", label: "Fri" },
    { id: "sat", label: "Sat" },
    { id: "sun", label: "Sun" }
  ];

  const times = [
    { id: "morning", label: "Morning" },
    { id: "afternoon", label: "Afternoon" },
    { id: "evening", label: "Evening" },
    { id: "anytime", label: "Anytime" }
  ];

  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="bg-card/80 backdrop-blur-sm border-b border-white/20 p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="font-pixel text-lg text-primary">Edit Pet Profile</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Pet Avatar */}
        <div className="card-soft p-6 text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <img
              src={petData.avatar}
              alt={petData.name}
              className="w-full h-full object-cover rounded-full shadow-soft border-4 border-white/50"
            />
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-soft hover:scale-110 transition-transform">
              <Camera className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
          <p className="font-body text-sm text-muted-foreground">Tap to change photo</p>
        </div>

        {/* Basic Info */}
        <div className="space-y-4">
          <div className="card-soft p-4">
            <label className="font-body font-semibold text-sm text-foreground block mb-2">Pet Name</label>
            <input
              type="text"
              value={petData.name}
              onChange={(e) => setPetData({ ...petData, name: e.target.value })}
              className="w-full bg-input/50 border border-white/20 rounded-xl px-4 py-2 font-body 
                         focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card-soft p-4">
              <label className="font-body font-semibold text-sm text-foreground block mb-2">Breed</label>
              <input
                type="text"
                value={petData.breed}
                onChange={(e) => setPetData({ ...petData, breed: e.target.value })}
                className="w-full bg-input/50 border border-white/20 rounded-xl px-4 py-2 font-body 
                           focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="card-soft p-4">
              <label className="font-body font-semibold text-sm text-foreground block mb-2">Age</label>
              <input
                type="text"
                value={petData.age}
                onChange={(e) => setPetData({ ...petData, age: e.target.value })}
                className="w-full bg-input/50 border border-white/20 rounded-xl px-4 py-2 font-body 
                           focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="card-soft p-4">
          <h3 className="font-body font-semibold text-foreground mb-3">Favourite Activities</h3>
          <div className="grid grid-cols-2 gap-3">
            {activities.map((activity) => (
              <label
                key={activity.id}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                  petData.activities.includes(activity.id)
                    ? "bg-primary/20 border-primary/50"
                    : "bg-muted/30 border-transparent hover:bg-muted/50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={petData.activities.includes(activity.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPetData({ ...petData, activities: [...petData.activities, activity.id] });
                    } else {
                      setPetData({ 
                        ...petData, 
                        activities: petData.activities.filter(a => a !== activity.id)
                      });
                    }
                  }}
                  className="hidden"
                />
                <span className="text-lg">{activity.icon}</span>
                <span className="font-body text-sm">{activity.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Personality Traits */}
        <div className="card-soft p-4">
          <h3 className="font-body font-semibold text-foreground mb-3">Personality Traits</h3>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait) => (
              <button
                key={trait.id}
                onClick={() => {
                  if (petData.traits.includes(trait.id)) {
                    setPetData({ 
                      ...petData, 
                      traits: petData.traits.filter(t => t !== trait.id)
                    });
                  } else {
                    setPetData({ ...petData, traits: [...petData.traits, trait.id] });
                  }
                }}
                className={`px-4 py-2 rounded-full font-body text-sm transition-all ${
                  petData.traits.includes(trait.id)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {trait.label}
              </button>
            ))}
          </div>
        </div>

        {/* Availability Schedule */}
        <div className="card-soft p-4">
          <h3 className="font-body font-semibold text-foreground mb-3">Availability Schedule</h3>
          
          <div className="mb-4">
            <label className="font-body text-sm text-muted-foreground block mb-2">Available Days</label>
            <div className="flex flex-wrap gap-2">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => {
                    if (petData.availability.days.includes(day.id)) {
                      setPetData({
                        ...petData,
                        availability: {
                          ...petData.availability,
                          days: petData.availability.days.filter(d => d !== day.id)
                        }
                      });
                    } else {
                      setPetData({
                        ...petData,
                        availability: {
                          ...petData.availability,
                          days: [...petData.availability.days, day.id]
                        }
                      });
                    }
                  }}
                  className={`px-3 py-2 rounded-full font-body text-sm transition-all ${
                    petData.availability.days.includes(day.id)
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-muted-foreground block mb-2">Preferred Time</label>
            <div className="flex flex-wrap gap-2">
              {times.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setPetData({
                    ...petData,
                    availability: { ...petData.availability, time: time.id }
                  })}
                  className={`px-4 py-2 rounded-full font-body text-sm transition-all ${
                    petData.availability.time === time.id
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {time.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button 
          onClick={() => {
            // Save pet data logic here
            console.log("Saving pet data:", petData);
            onBack();
          }}
          className="w-full bg-gradient-pink text-primary-foreground py-4 rounded-2xl 
                           font-body font-semibold shadow-soft transition-all duration-300 
                           hover:shadow-float hover:-translate-y-0.5 active:scale-95
                           flex items-center justify-center gap-2">
          <PawPrint className="w-5 h-5" fill="currentColor" />
          Save Profile
        </button>
      </div>
    </div>
  );
};