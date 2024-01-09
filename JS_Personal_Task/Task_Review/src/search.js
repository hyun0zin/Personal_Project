export const cardSearch = (searchKeyword) => {
  const movieCards = document.querySelectorAll(".movieCards");

  movieCards.forEach((card) => {
    const title = card.querySelector(".movieTitle").textContent.toUpperCase();
    const searchedValue = searchKeyword.toUpperCase();

    if (title.includes(searchedValue)) {
      card.style.display = "block"; // 화면에 띄우기
    } else {
      card.style.display = "none"; // 화면에서 없애기
    }
  });
};
