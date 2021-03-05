import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unblash from "./api/unplash";

function App() {
  const [pins, setPins] = useState([]);

  const getImages = (term) => {
    return unblash.get("search/photos", {
      params: {
        query: term,
      },
    });
  };
  const onSearchSubmit = (term) => {
    console.log(`this is value search ${term}`);
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setPins(newPins);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["tokyo", "dogs", "cats", "Bali", "cars"];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.55 - Math.random();
          });
        })
      );
      Promise.all(promises).then(() => {
        setPins(pinData);
      });
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      <MainBoard pins={pins} />
    </div>
  );
}

export default App;
