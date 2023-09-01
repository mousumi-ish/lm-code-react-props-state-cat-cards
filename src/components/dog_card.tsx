import dog1 from "../assets/images/catom-dog.png";
import dog2 from "../assets/images/guard-dog.png";
import dog3 from "../assets/images/poof.gif";
import DogImage from "./dog_image";
const images = [
  {
    image: dog1,
    altText: "Describe this cat!",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "amblin",
    attributionUrl: "https://www.flickr.com/people/amblin/",
  },
  {
    image: dog2,
    altText: "Describe this cat!",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "ivva",
    attributionUrl: "https://www.flickr.com/people/ivva/",
  },
  {
    image: dog3,
    altText: "Describe this cat!",
    licenceType: "CC BY-ND 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-nd/2.0/",
    attributionName: "Rachele Pettarelli Ph",
    attributionUrl: "https://www.flickr.com/people/rachephotos/",
  },
];
interface DogCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  dogIndex: number;
}
const DogCard: React.FC<DogCardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  dogIndex,
}) => {
  return (
    <div className="card">
      {dogIndex < images.length && (
        <DogImage
          image={images[dogIndex].image}
          altText={images[dogIndex].altText}
        />
      )}
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">{species}</p>
      <p className="card__text">{favFoods}</p>
      <p className="card__text">{birthYear}</p>
    </div>
  );
};
export default DogCard;
