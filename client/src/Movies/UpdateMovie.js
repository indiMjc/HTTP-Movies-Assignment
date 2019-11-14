import React, { useState } from "react";

const initialMovie = {
  title: "",
  director: "",
  metascore: null,
  stars: []
};

const UpdateMovie = props => {
  console.log(" : props", props);
  const [movie, setMovie] = useState(initialMovie);
  const changeHandler = e => {
    // e.persist();
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="update-form">
      <h1>Edit item:</h1>
      <form>
        <input type="text" name="title" placeholder="title" />
      </form>
    </div>
  );
};

export default UpdateMovie;
