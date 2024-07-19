import { Character } from "../types/Character";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character } : CharacterCardProps) => {
  const { id, name, image } = character;
  return (
    <li key={id} className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </li>
  );
}
