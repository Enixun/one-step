import React, { Component, useState, useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import CharacterEditor from "./CharacterEditor.jsx";
import SavedCharacterDisplay from "./SavedCharacterDisplay.jsx";

const App = () => {

  // const []

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<SavedCharacterDisplay />} />
        <Route path="/edit" element={<CharacterEditor />} />
      </Routes>
    </>
  );
};

export default App;