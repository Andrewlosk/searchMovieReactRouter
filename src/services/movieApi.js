import axios from "axios";


const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWEzYTI3M2Y2Yzg5YjQwZWVkYWE1YzVmNGIyZWM1YSIsIm5iZiI6MTczMDkxNTM4OC40ODk5OTk4LCJzdWIiOiI2NzJiYWMzY2RlNTQ2NTg1ZDA0ZGEzMDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yhRKA-gyTRO0snkAKcKNgBZ3gpcaLvrUo0Usi5thquE",
  },
};

export const fetchGetTrending = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    
  return response.data.results


};

export const fetchGetMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return response.data;
};


export const fetchGetReviewsById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
};

export const fetchGetCreditsById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
};
