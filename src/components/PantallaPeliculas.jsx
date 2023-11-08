import {PeliculasContext} from "../context/PeliculasContext"
import { useContext } from "react";
const PantallaPeliculas = () => {
  const {datosPeliculas, setDatosPeliculas} = useContext(PeliculasContext)
  return (
    <div className="pantalla-container">
      {datosPeliculas.map((peli) => (
        <div key={peli.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
            alt={peli.title}
          />
          <h2>{peli.title}</h2>
          <p>{peli.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default PantallaPeliculas;
