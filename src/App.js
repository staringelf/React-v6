import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div> 
      <h1 id="my-brand">Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="dog" breed="Wheaton Terrie" />
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
