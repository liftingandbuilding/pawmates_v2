import { useState } from "react";
import { PetPopup } from "./PetPopup";

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  image: string;
  owner: {
    name: string;
    age: number;
    gender: string;
  };
  traits: string[];
  location: {
    x: number;
    y: number;
  };
}

interface PetBubbleProps {
  pet: Pet;
}

export const PetBubble = ({ pet }: PetBubbleProps) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="pet-bubble w-16 h-16 absolute animate-pulse-soft hover:animate-bounce-gentle"
        style={{
          left: `${pet.location.x}%`,
          top: `${pet.location.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover rounded-full"
        />
      </button>

      {showPopup && (
        <PetPopup
          pet={pet}
          onClose={() => setShowPopup(false)}
          onRequestDate={() => {
            // Handle request date logic
            console.log(`Requesting date with ${pet.name}`);
            setShowPopup(false);
          }}
        />
      )}
    </>
  );
};