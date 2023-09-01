interface DogImageProps {
  image?: string;
  altText: string;
}
const DogImage: React.FC<DogImageProps> = ({ image, altText }) => (
  <img className="card__image" src={image} alt={altText} />
);
export default DogImage;
