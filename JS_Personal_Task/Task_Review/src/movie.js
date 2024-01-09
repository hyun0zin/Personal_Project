export const makeCards = async function () {
  const movies = await fetchMovieData();

  // 카드 생성하기
  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = movies
    // map 속성 이용해서 배열 다시 만들기
    .map(
      (movie) =>
        `
      <li class="movieCards" id=${movie.id}>
          <img src="http://image.tmdb.org/t/p/w300${movie.poster_path}" alt="">
          <h3 class="movieTitle">${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>Rating : ${movie.vote_average}</p>
      </li>`
    )
    .join("");

  // 카드 눌렀을 때, alert 띄우기
  cardList.addEventListener("click", handleClickCard);

  // 이벤트 위임 : 하위요소에서 발생한 이벤트를 상위요소에서 처리하도록 한다.
  function handleClickCard(event) {
    // <ul>태그 중, 카드 외 영역 클릭 시 -> event 발생 x
    if (event.target === cardList) return; //함수 바로 종료.

    if (event.target.matches(".movieCards")) {
      alert(`영화 id : ${event.target.id}`);
    } else {
      // 카드의 자식 태그 나머지(img, h3, p 태그 등) 클릭 시, 부모(<li>)의 id로 접근
      alert(`영화 id : ${event.target.parentNode.id}`);
    }
  }
};

// fetch로 데이터 불러오기

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzFjNzNiNzQ4N2IwMTM5ZTI2MDU5MjFhZTBhMjA0MCIsInN1YiI6IjY1OTY1YTFmMzI2ZWMxNGU2ZDA2YzFkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6L2OeVyMqWiyUQs3Qi5f-6rwiWL-k8Oku-0G_5f6S0"
    }
  };
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
  const data = await response.json();
  return data.results;
}
