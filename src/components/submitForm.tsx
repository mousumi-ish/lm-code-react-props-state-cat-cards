import { useState } from "react";
import Cat from "../data/cat";
const CatSubmitForm: React.FC = () => {
  const [state, setState] = useState<any>({
    name: "",
    species: " ",
    favFoods: [],
    birthYear: 0,
  });

  function handleChange(e: any) {
    const value = e.target.value;
    setState({ state, [e.target.name]: value });
  }
  function handleSubmit() {
    alert(" Success!!!");
  }
  return (
    <form className="form__section">
      <h3 className="form__title">Cat Information Form</h3>
      <div className="container">
        <label className="form__label">Name: </label>
        <br />
        <input name="name" value={state.name} onChange={handleChange} />
      </div>
      <div className="container">
        <label className="form__label">Species: </label>
        <br />
        <input name="species" value={state.species} onChange={handleChange} />
      </div>
      <div className="container">
        <label className="form__label">FavFoods: </label>
        <br />
        <input name="favFoods" value={state.favFoods} onChange={handleChange} />
      </div>
      <div className="container">
        <label className="form__label">BirthYear: </label>
        <br />
        <input
          name="birthYear"
          value={state.birthYear}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="container">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default CatSubmitForm;
