import React, { useEffect, useState } from "react";

const RaceMenu = () =>  {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api/races')
      .then(response => response.json())
      .then(races => {
        // const raceNames = races.map((race, i) => <li>{race.name}</li>)
        setBackendData(races);
      })
      .catch();
    }, []); //limits call
    
  const raceNames = backendData.map((raceObj, i) => <button onClick={(e) => {console.log(e.target.innerText)}} key={i}>{raceObj.name}</button>);

  return (
    <div>
      {raceNames}
    </div>
  );
};

export default RaceMenu;