import React, { Component } from "react";
import Test from "./TestComponent.jsx";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>Hello World</p>
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Hello World</h1>
      </div>
      <div className="container">
        <Test />
      </div>
    </>
  );
};

export default App;