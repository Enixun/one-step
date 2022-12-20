// import { RestartProcess } from "concurrently";
import React, { useEffect, useState } from "react";

function Test ()  {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api/races')
      .then(response => response.json())
      .then(races => {
        // const raceNames = races.map((race, i) => <li>{race.name}</li>)
        setBackendData(races);
      })
    }, []); //limits call
    
  // console.log(backendData)
  const raceNames = backendData.map((raceObj, i) => <li key={i}>{raceObj.name}</li>);
  console.log(raceNames)

  return (
    <div>
      {/* <p>Something</p> */}
      <ul>
        {raceNames}
      </ul>
    </div>
  );
};

export default Test;