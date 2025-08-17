import { Edit3, Award, Trophy } from "lucide-react";

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  image: string;
  traits: string[];
  isOwn?: boolean;
}

interface Owner {
  name: string;
  tagline?: string;
  badge?: {
    text: string;
    icon: "trophy" | "award";
  };
}

interface PetCardProps {
  pet: Pet;
  owner?: Owner;
  onEdit?: () => void;
}

export const PetCard = ({ pet, owner, onEdit }: PetCardProps) => {
  return (
    <div className="card-floating p-4 mb-4">
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-16 h-16 object-cover rounded-full shadow-soft border-2 border-white/50"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-pixel text-foreground">{pet.name}</h3>
            {pet.isOwn && (
              <button
                onClick={onEdit}
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Edit3 className="w-4 h-4 text-secondary-foreground" />
              </button>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground font-body mb-2">
            {pet.breed} • {pet.age} years old
          </p>

          {owner && (
            <div className="mb-2">
              <p className="text-sm font-body font-semibold text-foreground">
                {owner.name}
              </p>
              {owner.tagline && (
                <p className="text-xs text-muted-foreground font-body italic">
                  {owner.tagline}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-1 mb-2">
            {pet.traits.map((trait) => (
              <span
                key={trait}
                className="px-2 py-1 bg-accent/30 text-accent-foreground rounded-full text-xs font-body flex items-center gap-1"
              >
                🐾 {trait}
              </span>
            ))}
          </div>

          {owner?.badge && (
            <div className="flex items-center gap-1 mt-2">
              {owner.badge.icon === "trophy" ? (
                <Trophy className="w-4 h-4 text-warning" />
              ) : (
                <Award className="w-4 h-4 text-success" />
              )}
              <span className="text-xs font-body font-semibold text-foreground">
                {owner.badge.text}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};