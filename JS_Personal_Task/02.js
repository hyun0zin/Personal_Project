let all_movie_list = []; // 빈 배열 선언

// card 형태로 화면에 나타내기 
const draw_movie_list = movie_list => {
    const movie_list_element = document.querySelector("movie-list");

    // innerHTML : HTML 요소로 들어가는 값들을 문자열로 나타냄.
    // reduce 메서드 : 배열을 순회하면서 누적되는 값을 받는 메서드
    movie_list_element.innerHTML = movie_list.reduce((_movie_list, movie_item) => {
        const {id, poster_path, title, overview, vote_average} = movie_item;

        return(_movie_list += ``);

    },"");
}

<li class="movie-item" onclick="alert('movie_id : ${id}`)">
    <img class=""></img>

</li>



// fetch로 results의 데이터 가져오기

const fetch_movie = async rest_url => {
  const { results } = await fetch(`https://api.themoviedb.org/3/${rest_url}`,{
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzFjNzNiNzQ4N2IwMTM5ZTI2MDU5MjFhZTBhMjA0MCIsInN1YiI6IjY1OTY1YTFmMzI2ZWMxNGU2ZDA2YzFkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6L2OeVyMqWiyUQs3Qi5f-6rwiWL-k8Oku-0G_5f6S0";
  }
}).then
}
