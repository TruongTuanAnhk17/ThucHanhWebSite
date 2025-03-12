document.addEventListener("DOMContentLoaded", function () {
  const movieList = document.getElementById("movieList");

  for (let i = 0; i < 6; i++) {
    let phim = document.createElement("div");
    phim.classList.add("col-md-4", "phim");
    phim.innerHTML = `
          <img src="https://loremflickr.com/200/200?random=${i}" alt="Phim">
          <h5 class="mt-2">Phim ${i + 1}</h5>
          <a href="pages/chi-tiet-phim.html" class="btn btn-danger">Xem chi tiết</a>
      `;
    movieList.appendChild(phim);
  }
});
