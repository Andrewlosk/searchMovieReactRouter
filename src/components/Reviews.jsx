import { fetchGetReviewsById } from "../services/movieApi"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Reviews() {

      const [reviews, setReviews] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const { movieId } = useParams();
    
    
      useEffect(() => {
        const getMovie = async () => {
          try {
            const response = await fetchGetReviewsById(movieId);
            setReviews(response);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        };
        getMovie();
      }, [movieId]);

      console.log(reviews);
      

    return(
        <div>
            {reviews.length > 0 ?  reviews.map((review) => {
                return <li key={review.id}>
                    <h4>Author: {review.author}</h4>
                    <p>{review.content}</p>
                </li>
            }) : <p>no reviews</p>}

        </div>
    )
}