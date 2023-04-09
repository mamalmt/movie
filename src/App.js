import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Nav, Movies, Login, Single } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);
  const sendRequest = async () => {
    let response = await fetch(
      "https://imdb-api.com/en/API/Top250Movies/k_c9no9x5w"
    );
    let responseDate = await response.json();
    setMovieList(responseDate.items);
    console(movieList);
  };
  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies movies={movieList} />} />
        <Route path="/movies/:id" element={<Single />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
