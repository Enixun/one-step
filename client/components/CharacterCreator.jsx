import React, { Component, useState, useEffect } from "react";
import RaceMenu from "./RaceMenu.jsx";
import NameMenu from "./NameMenu.jsx";
import AbilityScores from "./AbilityScores.jsx";

import { rollSet } from "../rollFunctions";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>Hello World</p>
//       </div>
//     );
//   }
// }

const saveCharacter = ({ name }) => {
  console.log('This will need to be mongoose and send to the server');
}

const defaultCharacter = {
  abilityScores: {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  },
  age: 30,
  class: 'Fighter',
  name: 'John Doe',
  race: 'Human',
};

const CharacterCreator = () => {
  const [characterState, setCharacterState] = useState(defaultCharacter);
  const [rollsState, setRollsState] = useState({
    rolls: rollSet(),
    attributes: {
      Strength: false,
      Dexterity: false,
      Constitution: false,
      Intelligence: false,
      Wisdom: false,
      Charisma: false,
    }
  }); //had to use state to get around re-rendering without polluting

  return (
    <>
      <div className="container">
        <p>Your Character: {JSON.stringify(characterState)}</p>
        <AbilityScores 
          rollsState={{...rollsState}}
          updateRollsState={setRollsState}
          state={{...characterState}}
          updateAbilityScores={setCharacterState} />
        <RaceMenu 
          characterRace={characterState.race}
          updateCharacterRace={(newRace) => setCharacterState({...characterState, race: newRace})} />
        <NameMenu state={characterState} onChange={setCharacterState} />
      </div>
      <div className="container">
        <button id="save" className="btn" onClick={(e) => saveCharacter(characterState)}>Save</button>
      </div>
    </>
  );
};

export default CharacterCreator;