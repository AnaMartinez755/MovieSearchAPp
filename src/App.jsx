import BuscadorPeliculas from "./components/BuscadorPeliculas";
import PantallaPeliculas from "./components/PantallaPeliculas";
import PeliculasProvider from "./context/PeliculasProvider";
import { Route, Routes } from "react-router-dom";
import CardPage from "./routes/CardPage";
const App = () => {
  return (
    <PeliculasProvider>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-container">
              <header className="buscador-container">
                <BuscadorPeliculas></BuscadorPeliculas>
              </header>
              <PantallaPeliculas></PantallaPeliculas>
            </div>
          }
        ></Route>
        <Route path="/card/:id" element={<CardPage></CardPage>}></Route>
      </Routes>
    </PeliculasProvider>
  );
};

export default App;
