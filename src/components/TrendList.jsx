
import { Link } from "react-router-dom";



function TrendList({trendMovies}) {

  

  return (
    <ul>
        {trendMovies.map((movie) => {
            return (<li key={movie.id}>

                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>)
        })}
    </ul>


  );
}

export default TrendList;