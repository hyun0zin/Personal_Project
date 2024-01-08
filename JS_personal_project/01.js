// 1. title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), vote_average(평점) 넣기
// 2. id 클릭 시, alert 창 띄우기
// 3. 영화 검색 구현

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
    .then((response) => {
      let movieList = response.results
      // console.log(movieList);
      movieList.forEach((data) => {
        const img = 'http://image.tmdb.org/t/p/w300' + data['poster_path'];
        const title = data['title'];
        const overview = data['overview'];
        const voteAver = data['vote_average'];
        const idNum = data['id'];
        // console.log(idNum); 
        // data 각각 불러오기 성공. 그 다음은? -> html 요소로 카드 생성하기? 
        // document.createElement(tagName) : 새로운 HTML 요소를 생성
        
        const card = document.createElement('div');
        const imgElement = document.createElement('img');
        const titleElement = document.createElement('h2');
        const overviewElement = document.createElement('h4');
        

      })
    })
    .catch((err) => console.error(err));




