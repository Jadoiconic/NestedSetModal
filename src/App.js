import React, { useEffect } from "react";
import NavBar from "./Routes/Header";
import Routers from "./Routes/Routers";

function App() {
  useEffect((_) => {
    document.documentElement.classList.add("bg-zinc-200");
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div className="px-10 my-3">
        <Routers />
      </div>
    </React.Fragment>
  );
}

export default App;
