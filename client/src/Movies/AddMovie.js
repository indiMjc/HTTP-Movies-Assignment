import React, { useState } from "react";
import axios from "axios";

const AddMovie = props => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: ""
  });

  const handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "stars") {
      value = value.split(",");
    }
    setNewMovie({
      ...newMovie,
      [name]: value
    });
  };

  const addMovie = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/movies", newMovie)
      .then(alert("New Movie Added!"))
      .catch(err => console.log(err))
      .finally(() => props.history.push("/"));
  };
  return (
    <form>
      <label>
        Title:
        <br />
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Director:
        <br />
        <input
          type="text"
          name="director"
          value={newMovie.director}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Metascore:
        <br />
        <input
          type="number"
          name="metascore"
          value={newMovie.metascore}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Stars (separate by commas):
        <br />
        <input
          type="text"
          name="stars"
          value={newMovie.stars}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <button className="save-button" type="submit" onClick={addMovie}>
        Add movie
      </button>
    </form>
  );
};

export default AddMovie;
