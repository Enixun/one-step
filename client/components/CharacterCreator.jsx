import React, { Component, useState, useEffect } from "react";
import AttributeMenu from "./AttributeMenu.jsx";
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

const saveCharacter = (player) => {
  // console.log('This will need to be mongoose and send to the server');
  fetch('/db/players', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(player)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

const defaultCharacter = {
  name: 'John Doe',
  age: 30,
  class: 'Fighter',
  race: 'Human',
  abilityScores: {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  },
};

const CharacterCreator = () => {
  const [characterState, setCharacterState] = useState(defaultCharacter);
  const [rollsState, setRollsState] = useState({
    rolls: rollSet(),
    abilityTypes: {
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
        <AttributeMenu 
          menuType='races'
          characterAttribute={characterState.race}
          updateCharacterAttribute={(newRace) => setCharacterState({...characterState, race: newRace})} />
        <AttributeMenu 
          menuType='classes'
          characterAttribute={characterState.class}
          updateCharacterAttribute={(newClass) => setCharacterState({...characterState, class: newClass})} />
        <NameMenu state={characterState} onChange={setCharacterState} />
      </div>
      <div className="container">
        <button id="save" className="btn" onClick={(e) => saveCharacter({...characterState})}>Save</button>
      </div>
    </>
  );
};

export default CharacterCreator;