import { PeliculasContext } from "./PeliculasContext";
import { useState } from "react";

const PeliculasProvider = ({ children }) => {
  const [datosPeliculas, setDatosPeliculas] = useState([]);
  return (
    <PeliculasContext.Provider value={{ datosPeliculas, setDatosPeliculas }}>
      {children}
    </PeliculasContext.Provider>
  );
};

export default PeliculasProvider;