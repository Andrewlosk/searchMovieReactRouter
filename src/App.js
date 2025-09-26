
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import TrendMovie from "./components/TrendList";

// import Trends from "./pages/Trends";
const Trends = lazy(() => import("./pages/Trends"))

// import MoviePage from "./pages/MoviePage";
const MoviePage = lazy(() => import("./pages/MoviePage"))

// import Header from "./components/Header";
const Header = lazy(() => import("./components/Header"))

// import MovieSearch from "./pages/MovieSearch";
const MovieSearch = lazy(() => import("./pages/MovieSearch"))

// import Reviews from "./components/Reviews";
const Reviews = lazy(() => import("./components/Reviews"))

// import Cast from "./components/Cast";
const Cast = lazy(() => import("./components/Cast"))

// import NotFound from "./pages/NotFound";
const NotFound = lazy(() => import("./pages/NotFound"))



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

          <Route path="*" element={<NotFound/>}></Route>

        </Route>


        
      </Routes>
    </div>
  );
}

export default App;
