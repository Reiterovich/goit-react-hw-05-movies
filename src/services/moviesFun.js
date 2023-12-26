export function moviesSearchFun(searshParam) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZhMGNmNDU5MDk1ZmY4MjI4MTQwNzRjZThhNzI1ZiIsInN1YiI6IjY1N2Y1N2ViNjdiNjEzMDU1MjhjODE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9tYv4W2usSl9nJR0P-Aa5-DrVa1ZLviMJNryhZEts4',
    },
  };
  return fetch(
    `https://api.themoviedb.org/3/search/movie?include_adult=true&language=en-US&page=1&query=${searshParam}`,
    options
  ).then(response => response.json());
}
