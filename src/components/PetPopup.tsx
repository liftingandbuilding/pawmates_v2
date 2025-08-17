import { X, Heart } from "lucide-react";

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
}

interface PetPopupProps {
  pet: Pet;
  onClose: () => void;
  onRequestDate: () => void;
}

export const PetPopup = ({ pet, onClose, onRequestDate }: PetPopupProps) => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="card-soft max-w-sm w-full animate-scale-in">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          <div className="text-center mb-4">
            <div className="w-24 h-24 mx-auto mb-3 relative">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover rounded-full shadow-soft border-4 border-white/50"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white animate-pulse-soft" />
            </div>
            
            <h3 className="font-pixel text-lg text-foreground mb-1">{pet.name}</h3>
            <p className="text-muted-foreground font-body">
              {pet.breed} • {pet.age} years old
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-body font-semibold text-sm text-foreground mb-2">Owner</h4>
            <p className="text-muted-foreground font-body text-sm">
              {pet.owner.name}, {pet.owner.age}{pet.owner.gender}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-body font-semibold text-sm text-foreground mb-2">Personality</h4>
            <div className="flex flex-wrap gap-2">
              {pet.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-body border border-primary/30"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onRequestDate}
            className="w-full bg-gradient-pink text-primary-foreground py-3 rounded-2xl 
                       font-body font-semibold shadow-soft transition-all duration-300 
                       hover:shadow-float hover:-translate-y-0.5 active:scale-95
                       flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4" fill="currentColor" />
            Request Pet Date
          </button>
        </div>
      </div>
    </div>
  );
};