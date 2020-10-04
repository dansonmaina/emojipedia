import React from "react";
import Dictionry from "./Dictionry";
import emojipedia from "../emojipedia";

function Entry(pedia) {
  return (
    <Dictionry
      key={pedia.id}
      emoji={pedia.emoji}
      name={pedia.name}
      meaning={pedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map(Entry)}
    </div>
  );
}

export default App;
