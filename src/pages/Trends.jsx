import { fetchGetTrending } from "../services/movieApi";
import TrendList from "../components/TrendList";
import { useState, useEffect } from "react";

function Trends() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchGetTrending();
      setTrendMovies(movies);
    };
    getMovies();
  }, []);

  console.log(trendMovies);

  return (
    <main>
      <p>Trend Movies</p>
      <TrendList trendMovies={trendMovies}></TrendList>
    </main>
  );
}

export default Trends;
