import { Link } from "react-router-dom";
import { PeliculasContext } from "../context/PeliculasContext";
import { useContext } from "react";
const PantallaPeliculas = () => {
  const handleCardClick = (peli) => {
    console.log(peli);
  };
  const { datosPeliculas } = useContext(PeliculasContext);
  return (
    <div className="pantalla-container">
      {datosPeliculas.map((peli) => (
        <Link to={`/card/${peli.id}`} key={peli.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
            alt={peli.title}
          />
          <h2>{peli.title}</h2>
          <div className="datos-container">
            <p>
              <b>Popularity:</b> <br />
              {peli.popularity}
            </p>
            <p>
              <b>Release date:</b> <br />
              {peli.release_date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PantallaPeliculas;
