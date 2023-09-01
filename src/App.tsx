import "./App.css";
import Cat from "./data/cat";
import Dog from "./data/dog";
import { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import CatCard from "./components/cat_card";
import dogData from "./data/dog-data";
import CatData from "./data/catData";
import DogCard from "./components/dog_card";
import CatSubmitForm from "./components/submitForm";
function App() {
  // JavaScript/TypeScript code can be inserted here!
  const [cats, setCats] = useState<Array<Cat>>(CatData);
  const catCount = cats.length;
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
  const dogCount = dogs.length;
  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />
      <h1 />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard
              key={index}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}

          {dogs.map((dog, index) => (
            <DogCard
              key={index}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              dogIndex={index}
            />
          ))}
        </div>
      </main>
      <CatSubmitForm />
      <Footer />
    </>
  );
}

export default App;
