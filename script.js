var closeArea = document.querySelector(".close-area");
var sidebar = document.querySelector(".sidebar");
var hamburger = document.querySelector(".fa-bars");

closeArea.addEventListener("click", () => {
  sidebar.classList.remove("open");
  sidebar.classList.add("closed");
  closeArea.classList.remove("visible");
});

hamburger.addEventListener("click", () => {
  //   alert("asdasdasdj");
  closeArea.classList.add("visible");
  sidebar.classList.remove("closed");
  sidebar.classList.add("open");
});
