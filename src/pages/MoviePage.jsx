import { fetchGetMovieById } from "../services/movieApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/moviePage.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();


  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchGetMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  console.log(movie);

  return (
    <main>
        <Link className="backLink" to='/'> &lt;- Go back</Link>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        movie && (
          <div>
            <div className="pageBlock">
              <img
                width={200}
                height={300}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="descBlock">
                <h2>{movie.title}</h2>
                <h3>overview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <p>{movie.genres.map((genre) => genre.name + " ")}</p>
              </div>
            </div>
            <hr />
            <div>
                <p>additional information</p>
                <ul>
                    <li><Link to={`/movies/${movieId}/reviwes`}>Reviwes</Link></li>
                    <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>

                </ul>

                
            </div>
            <hr />

          </div>
        )
      )}
      <Outlet></Outlet>
    </main>
  );
}
