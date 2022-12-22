import React, { Component, useState, useEffect } from "react";
import CharacterCreator from "./CharacterCreator.jsx";

const App = () => {
  return (
    <>
        <div className="container">
            <h1>One Step</h1>
        </div>
        <CharacterCreator />
    </>
  );
};

export default App;