// main.js 에서 할 일 :
// 1. 영화 데이터 가져와서 화면에 나타내기

import { makeCards } from "./movie.js";
makeCards();

// // 2. 영화 검색
import { cardSearch } from "./search.js";

// input 창의 커서를 깜빡거리게 만들기
const searchInput = document.querySelector("#search-input");
searchInput.focus();

// form 태그의 기본 새로고침 없애기
const form = document.querySelector("#search-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  cardSearch(searchInput.value);
});
