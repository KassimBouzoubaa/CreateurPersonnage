import React, { useState } from "react";
import CreateurPersonnage from "./containers/CreateurPersonnage/CreateurPersonnage";
import ListePersonnage from "./containers/ListePersonnage/ListePersonnage";
function App() {
  const [actualisation, setActualisation] = useState(false);

  const handleActualisation = () => {
    setActualisation(!actualisation);
  };
  return (
    <>
      <CreateurPersonnage refresh={() => handleActualisation()} />
      <ListePersonnage refresh={actualisation} />
    </>
  );
}

export default App;
