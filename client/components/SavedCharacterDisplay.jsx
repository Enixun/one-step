import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete.jsx";

const SavedCharacterDisplay = () => {
	const [savedCharacters, setSavedCharacters] = useState([]);

	useEffect(() => {
		fetch(`/db/player_characters`)
			.then(response => response.json())
			.then(characterList => {
				// const active = attributeList.find((attribute) => attribute.name === characterAttribute)
				setSavedCharacters(characterList);
			})
			.catch(err => console.log(err));
		}, [savedCharacters.length]); //limits call

	return (
		<div className="container">
			<h2>Saved Characters</h2>
      <ul>
        {savedCharacters.map((characterObj, i) => {
          return <li
                    className="btn" 
                    onClick={(e) => {
                      fetch(`/db/player_characters/?_id=${characterObj._id}`, {
                        method: 'DELETE'
                      })
                        .then(res => res.json())
                        .then(deleted => setSavedCharacters[deleted])
                        .catch(err => console.log(err))
                    }} 
                    value={characterObj} 
                    key={i}>
                    {characterObj.name} 
                    {Object.entries(characterObj.abilityScores).map((abilityScore, j) => {
                      return <span key={`score${i, j}`}>{` ${abilityScore[0]}: ${abilityScore[1]} `}</span>
                    })}
                    <Delete key={`d${i}`} />
                    {/* {characterObj.abilityScores} */}
                  </li>
        })}
      </ul>
        
      <Link className="btn" to="/">Home</Link>
      <Link className="btn" to="/edit">Create Character</Link>
		</div>
	);
};

export default SavedCharacterDisplay;