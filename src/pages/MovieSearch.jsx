import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchGetMoviesByQuery } from "../services/movieApi";
import TrendList from "../components/TrendList";

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get("name") || "";

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (movieName) {
            const response = await fetchGetMoviesByQuery(movieName);
            setMovies(response);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetchGetMoviesByQuery(movieName);
    setMovies(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          value={movieName}
          onChange={(e) => updateQueryString(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {movieName && <TrendList trendMovies={movies}></TrendList>}
    </div>
  );
}
