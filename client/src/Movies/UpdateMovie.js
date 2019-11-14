import React, { useState, useEffect } from "react";

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
  return (
    <div className="update-form">
      <h1>Edit movie:</h1>
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
    </div>
  );
};

export default UpdateMovie;
