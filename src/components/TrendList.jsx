
import { Link, useLocation} from "react-router-dom";




function TrendList({trendMovies}) {

  const location = useLocation()

  

  return (
    <ul>
        {trendMovies.map((movie) => {
            return (<li key={movie.id}>

                <Link to={`/movies/${movie.id}`} state={{from: location.pathname}}>{movie.title}</Link>
            </li>)
        })}
    </ul>


  );
}

export default TrendList;