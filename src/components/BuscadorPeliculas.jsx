import { useContext, useState } from "react";
import {PeliculasContext} from "../context/PeliculasContext"
const BuscadorPeliculas = () => {

  const {datosPeliculas, setDatosPeliculas} = useContext(PeliculasContext)
  const urlBase = "https://api.themoviedb.org/3/search/movie";

  const API_KEY = "f5f38610fda69ff9cd64cfeea0777721";
  const [pelicula, setPelicula] = useState("");
  const handleInputChange = (event) => {
    setPelicula(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetchPelicula();
  };
  const fetchPelicula = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${pelicula}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setDatosPeliculas(data.results);
    } catch (error) {
      console.error("ocurrio un error");
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Movie"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default BuscadorPeliculas;
