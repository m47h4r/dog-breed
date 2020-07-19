import React from "react";

import "./List.css";

import Header from "../components/Header";

const fakeData = {
  message: {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
    appenzeller: [],
    australian: ["shepherd"],
    basenji: [],
    beagle: [],
    bluetick: [],
    borzoi: [],
    bouvier: [],
    boxer: [],
    brabancon: [],
    briard: [],
    buhund: ["norwegian"],
    bulldog: ["boston", "english", "french"],
  },
  status: "success",
};

function List() {
  return (
    <>
      <Header currentPage="list" />
      <div className="breed-wrapper">
        {Object.keys(fakeData.message).map((breed) => (
          <>
            <div className="breed">
            <div className="entity">{breed}</div>
            {fakeData.message[breed].length > 0 ? (
              <div className="sub-breed">
                {fakeData.message[breed].map((subBreed) => (
                  <div className="entity">{subBreed}</div>
                ))}
              </div>
            ) : null}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default List;
