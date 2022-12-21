import React, { Component, useState, useEffect } from "react";
import RaceMenu from "./RaceMenu.jsx";
import NameMenu from "./NameMenu.jsx";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>Hello World</p>
//       </div>
//     );
//   }
// }

const saveCharacter = ({name}) => {
  console.log('Name but in saveCharacter', name);
}

const App = () => {
  const [characterState, setCharacterState] = useState({name: 'John Doe', age: 29});



  console.log('characterName in App', characterState)

  return (
    <>
      <div className="container">
        <h1>One Step</h1>
      </div>
      <div className="container">
        <p>Your Character: {characterState.name}</p>
        <NameMenu state={characterState} onChange={setCharacterState} />
        <RaceMenu />
      </div>
      <div className="container">
        <button id="save" onClick={(e) => saveCharacter()}>Save</button>
      </div>
    </>
  );
};

export default App;