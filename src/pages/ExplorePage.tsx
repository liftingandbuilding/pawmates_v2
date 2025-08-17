import { Filter } from "lucide-react";
import { PetBubble } from "../components/PetBubble";
import parkMap from "../assets/park-map.png";
import petCorgi from "../assets/pet-corgi.png";
import petCat from "../assets/pet-cat.png";
import petGolden from "../assets/pet-golden.png";
import petPug from "../assets/pet-pug.png";

const mockPets = [
  {
    id: "1",
    name: "Mochi",
    breed: "Corgi",
    age: 2,
    image: petCorgi,
    owner: { name: "Sarah", age: 28, gender: "F" },
    traits: ["Playful", "Social"],
    location: { x: 25, y: 30 }
  },
  {
    id: "2",
    name: "Luna",
    breed: "Tabby Cat",
    age: 3,
    image: petCat,
    owner: { name: "Mike", age: 25, gender: "M" },
    traits: ["Curious", "Gentle"],
    location: { x: 70, y: 45 }
  },
  {
    id: "3",
    name: "Buddy",
    breed: "Golden Retriever",
    age: 4,
    image: petGolden,
    owner: { name: "Emma", age: 30, gender: "F" },
    traits: ["Energetic", "Friendly"],
    location: { x: 45, y: 60 }
  },
  {
    id: "4",
    name: "Chester",
    breed: "Pug",
    age: 5,
    image: petPug,
    owner: { name: "Alex", age: 26, gender: "M" },
    traits: ["Sleepy", "Cuddly"],
    location: { x: 60, y: 25 }
  },
];

export const ExplorePage = () => {
  return (
    <div className="flex-1 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${parkMap})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />

      {/* Filter Button */}
      <button className="absolute top-4 right-4 z-10 bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-soft border border-white/30 hover:shadow-float transition-all duration-300">
        <div className="relative">
          <Filter className="w-5 h-5 text-primary" />
          <div className="absolute -top-1 -right-1 bg-warning rounded-full p-0.5">
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </button>

      {/* Pet Bubbles */}
      <div className="relative w-full h-full">
        {mockPets.map((pet) => (
          <PetBubble key={pet.id} pet={pet} />
        ))}
      </div>

      {/* Cute floating elements */}
      <div className="absolute top-20 left-10 text-2xl animate-bounce-gentle">🌸</div>
      <div className="absolute top-40 right-20 text-2xl animate-float" style={{ animationDelay: "0.5s" }}>🦋</div>
      <div className="absolute bottom-32 left-20 text-2xl animate-pulse-soft" style={{ animationDelay: "1s" }}>🌺</div>
    </div>
  );
};