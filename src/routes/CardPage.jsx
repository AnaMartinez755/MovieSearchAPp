import { Link, useParams } from "react-router-dom";
import { PeliculasContext } from "../context/PeliculasContext";
import { useContext } from "react";
const CardPage = () => {
  const { datosPeliculas } = useContext(PeliculasContext);
  const { id } = useParams();

  const pelicula = datosPeliculas.find((peli) => peli.id === parseInt(id));
  //   console.log(typeof id)

  return (
    <div className="individual-container">
      {pelicula ? (
        <div className="card-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt={pelicula.title}
          />
          <h2>Movie:</h2>
          <p>{pelicula.title}</p>
          <div className="datos-container"></div>
        </div>
      ) : (
        <p>Película no encontrada</p>
      )}
      <div className="card2-container">
        <div className="overview-container">
          <h4>Overview:</h4>
          {pelicula.overview}
        </div>
        <Link to={"/"} className="button-container">
          <button className="btn btn-secondary">Back to movies</button>
        </Link>
      </div>
    </div>
  );
};

export default CardPage;
