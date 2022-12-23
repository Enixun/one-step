import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>One Step</h1>
      <p>Welcome to One Step!</p>
      <p><small>Paizo plz don't sue. All rights resevered, etc. so on</small></p>
      <Link className="btn" to="/edit">Create Character</Link>
      <Link className="btn" to="/characters">View Characters</Link>
    </div>
  );
};

export default Home;