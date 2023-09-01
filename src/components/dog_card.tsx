const image = [];
interface DogCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}
const DogCard: React.FC<DogCardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
}) => {
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">{species}</p>
      <p className="card__text">{favFoods}</p>
      <p className="card__text">{birthYear}</p>
    </div>
  );
};
export default DogCard;
