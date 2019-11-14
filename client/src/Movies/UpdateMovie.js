import React, { useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const UpdateMovie = props => {
  const [movie, setMovie] = useState(initialMovie);

  useEffect(() => {
    if (props.movies.length > 0) {
      const newMovie = props.movies.find(
        thing => `${thing.id}` === props.match.params.id
      );
      setMovie(newMovie);
    }
  }, [props.movies, props.match.params.id]);

  const changeHandler = e => {
    e.persist();
    let value = e.target.value;
    let name = e.target.name;
    if (name === "metascore") {
      value = parseInt(value, 10);
    }
    setMovie({
      ...movie,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        props.setMovies(res.data);
        props.history.push("/");
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="update-form">
      <h1>Edit movie:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="text"
          name="director"
          value={movie.director}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="number"
          name="metascore"
          value={movie.metascore}
          onChange={changeHandler}
        />
        <button className="save-button">Submit changes</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
