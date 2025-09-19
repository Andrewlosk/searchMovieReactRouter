
import { Routes, Route } from "react-router-dom";
// import TrendMovie from "./components/TrendList";
import Trends from "./pages/Trends";
import MoviePage from "./pages/MoviePage";
import Header from "./components/Header";
import MovieSearch from "./pages/MovieSearch";
import Reviews from "./components/Reviews";
import Cast from "./components/Cast";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Trends/>}></Route>

          <Route path="/movies/" element={<MovieSearch/>}></Route>

          <Route path="/movies/:movieId" element={<MoviePage/>}>
            <Route path="/movies/:movieId/reviwes" element={<Reviews/>}></Route>
            <Route path="/movies/:movieId/cast" element={<Cast/>}></Route>

          </Route>
        </Route>


        
      </Routes>
    </div>
  );
}

export default App;
