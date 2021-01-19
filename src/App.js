import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Mainboard from "./Mainboard";
import unsplash from "./api/unsplash";

function App() {
  const [pins, setNewPins] = useState([]);

  const makeAPICall = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    let promises = [];
    let searchedPins = [];
    promises.push(
      makeAPICall(term).then((res) => {
        let results = res.data.results;
        results.map((pin) => {
          searchedPins.push(pin);
        });
      })
    );
    console.log(searchedPins, "what is in searchedPins here?");
    Promise.all(promises).then(() => {
      setNewPins(searchedPins);
    });
  };

  return (
    <div className="app">
      <div className="app__header">
        <Header onSubmit={onSearchSubmit} />
      </div>
      <div className="app__body">
        <Mainboard pins={pins} />
      </div>
    </div>
  );
}

export default App;
