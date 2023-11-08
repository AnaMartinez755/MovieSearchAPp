import BuscadorPeliculas from "./components/BuscadorPeliculas";
import PantallaPeliculas from "./components/PantallaPeliculas";
import PeliculasProvider from "./context/PeliculasProvider";
const App = () => {
  return (
    <PeliculasProvider>
      <div className="main-container">
        <header className="buscador-container">
          <BuscadorPeliculas></BuscadorPeliculas>
        </header>
        <PantallaPeliculas></PantallaPeliculas>
      </div>
    </PeliculasProvider>
  );
};

export default App;
