import React, { useEffect, useState } from "react";



const RaceMenu = ({ characterRace, updateCharacterRace }) =>  {
  const [backendData, setBackendData] = useState({races: [], activeRace: {}});

  useEffect(() => {
    fetch('/db/races')
      .then(response => response.json())
      .then(races => {
        const activeRace = races.find((race) => race.name === characterRace)
        setBackendData({...backendData, races, activeRace});
      })
      .catch(err => console.log(err));
    }, []); //limits call


  return (
    <div>
      {backendData.races.map((raceObj, i) => {
        return <button 
                className="btn" 
                onClick={(e) => {
                  setBackendData({...backendData, activeRace: raceObj});
                  updateCharacterRace(e.target.value);
                }} 
                value={raceObj.name}
                key={i}>{raceObj.name}</button>
      })}
      <p className="description">{backendData.activeRace.description}</p>
    </div>
  );
};

export default RaceMenu;