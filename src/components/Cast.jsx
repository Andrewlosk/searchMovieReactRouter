import { fetchGetCreditsById } from "../services/movieApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cast() {
  const [authors, setAuthor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchGetCreditsById(movieId);
        setAuthor(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  console.log(authors);

  return (
    <div>
        {authors.length > 0 ? authors.map((author) => {
        return (
          <li key={author.id}>
            <img
              width={200}
              height={200}
              src={`https://image.tmdb.org/t/p/w500${author.author_details.avatar_path}`}
              alt={author.author}
            />
            <h4>{author.author}</h4>
          </li>
        );
      }) : <p>no info about authors</p>}

    </div>
  );
}
