const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzFjNzNiNzQ4N2IwMTM5ZTI2MDU5MjFhZTBhMjA0MCIsInN1YiI6IjY1OTY1YTFmMzI2ZWMxNGU2ZDA2YzFkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6L2OeVyMqWiyUQs3Qi5f-6rwiWL-k8Oku-0G_5f6S0'
    }
};

fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
)
    .then((response) => response.json())
    .then((response) => {console.log(response)})
    .catch((err) => console.error(err));
    
// title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), vote_average(평점)