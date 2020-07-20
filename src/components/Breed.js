import React, { useEffect, useState } from "react";

import "./Breed.css";

import config from "../config";

function Breed({ name }) {
  let [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch(config.api.breedImageBaseURL + name + "/images")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  function generateRandomNumber() {
    return (Math.floor(Math.random() * (+images.message.length) + 1));
  }

  return (
    <button
      className="breed"
      data-image-number={imageIndex}
      onClick={() => setImageIndex(generateRandomNumber())}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))," +
          `url(${images !== null ? imageIndex !== 0 ? images.message[imageIndex] : "none" : "none"})`,
      }}
    >
      <div className="entity">{name}</div>
    </button>
  );
}

export default Breed;
