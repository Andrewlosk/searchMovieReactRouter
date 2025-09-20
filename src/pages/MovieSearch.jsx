import { useState } from "react"
import { fetchGetMoviesByQuery } from "../services/movieApi";
import TrendList from "../components/TrendList";

export default function MovieSearch() {
    const [inpValue, setInpValue] = useState('');
    const [movies, setMovies] = useState([]);


    const changeInpValue = (e) => {
        setInpValue(e.target.value)
    }



    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await fetchGetMoviesByQuery(inpValue)
        setMovies(response)
        console.log(response);
        


        // console.log(inpValue);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="value" value={inpValue} onChange={changeInpValue}/>
                <button type='submit'>Search</button>
            </form>
            {inpValue && <TrendList trendMovies={movies}></TrendList>}
            
        </div>
    )
}