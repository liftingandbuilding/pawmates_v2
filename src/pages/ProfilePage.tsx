import { PetCard } from "../components/PetCard";
import petCorgi from "../assets/pet-corgi.png";
import petCat from "../assets/pet-cat.png";
import petGolden from "../assets/pet-golden.png";
import petPug from "../assets/pet-pug.png";

const myPet = {
  id: "my-pet",
  name: "Mochi",
  breed: "Corgi",
  age: 2,
  image: petCorgi,
  traits: ["Social", "Energetic", "Sleepy"],
  isOwn: true
};

const nearbyPets = [
  {
    id: "1",
    name: "Luna",
    breed: "Tabby Cat",
    age: 3,
    image: petCat,
    traits: ["Curious", "Gentle"],
  },
  {
    id: "2",
    name: "Buddy",
    breed: "Golden Retriever", 
    age: 4,
    image: petGolden,
    traits: ["Friendly", "Playful"],
  },
  {
    id: "3",
    name: "Chester",
    breed: "Pug",
    age: 5,
    image: petPug,
    traits: ["Cuddly", "Lazy"],
  }
];

const owners = [
  {
    name: "Mike Chen",
    tagline: "Cuddles & coffee walks",
    badge: { text: "Good Boy Certified", icon: "award" as const }
  },
  {
    name: "Emma Rodriguez",
    tagline: "Adventure buddies wanted!",
    badge: { text: "10 dates!", icon: "trophy" as const }
  },
  {
    name: "Alex Thompson", 
    tagline: "Nap time enthusiast",
    badge: { text: "Couch Potato Club", icon: "award" as const }
  }
];

interface ProfilePageProps {
  onEditPet?: () => void;
}

export const ProfilePage = ({ onEditPet }: ProfilePageProps) => {
  return (
    <div className="flex-1 p-4 pb-24 overflow-y-auto">
      <div className="mb-6">
        <h2 className="font-pixel text-primary text-lg mb-4 text-center">My Pet</h2>
        <PetCard 
          pet={myPet} 
          onEdit={onEditPet}
        />
      </div>

      <div>
        <h3 className="font-pixel text-secondary-foreground text-sm mb-4 text-center">
          Nearby PawMates
        </h3>
        <div className="space-y-4">
          {nearbyPets.map((pet, index) => (
            <PetCard
              key={pet.id}
              pet={pet}
              owner={owners[index]}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 right-4 text-lg animate-float" style={{ animationDelay: "0.3s" }}>
        ⭐
      </div>
      <div className="fixed top-32 left-4 text-lg animate-bounce-gentle" style={{ animationDelay: "1s" }}>
        💖
      </div>
    </div>
  );
};