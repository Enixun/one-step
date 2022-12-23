import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AttributeMenu from './AttributeMenu.jsx';
import NameMenu from './NameMenu.jsx';
import AbilityScores from './AbilityScores.jsx';

import { rollSet } from '../rollFunctions';

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
  fetch('/db/player_characters', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  })
    .then((res) => {
      console.log(Object.keys(res));
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

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

function CharacterEditor({ inputCharacter, submitted, setSubmitted }) {
  const [characterState, setCharacterState] = useState((inputCharacter || defaultCharacter));
  // useEffect();
  const [rollsState, setRollsState] = useState({
    rolls: (inputCharacter) ? Array.from(Array(6)).map((el) => '----') : rollSet(),
    abilityTypes: {
      Strength: false,
      Dexterity: false,
      Constitution: false,
      Intelligence: false,
      Wisdom: false,
      Charisma: false,
    },
  }); // had to use state to get around re-rendering without polluting

  return (
    <>
      <div className="container">
        {/* <p>
          Your Character:
          {JSON.stringify(characterState)}
        </p> */}
        <NameMenu state={characterState} onChange={setCharacterState} />
        <AbilityScores
          rollsState={{ ...rollsState }}
          updateRollsState={setRollsState}
          state={{ ...characterState }}
          updateAbilityScores={setCharacterState}
        />
        <AttributeMenu
          menuType="races"
          characterAttribute={characterState.race}
          updateCharacterAttribute={(newRace) => setCharacterState({ ...characterState, race: newRace })}
        />
        <AttributeMenu
          menuType="classes"
          characterAttribute={characterState.class}
          updateCharacterAttribute={(newClass) => setCharacterState({ ...characterState, class: newClass })}
        />
        <Link
          id="save"
          className="btn"
          to="/characters"
          onClick={(e) => {
            // setSubmitted(true);
            saveCharacter({ ...characterState });
          }}
        >
          Save
        </Link>
        <Link id="cancel" className="btn" to="/" >
          Cancel
        </Link>
      </div>
    </>
  );
}

export default CharacterEditor;
