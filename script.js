var sidebarContainer = document.querySelector(".close-area");
var sidebar = document.querySelector(".sidebar");
var hamburger = document.querySelector(".fa-bars");

sidebarContainer.addEventListener("click", () => {
  sidebar.classList.remove("open");
  sidebar.classList.add("closed");
  sidebarContainer.classList.remove("visible");
});

hamburger.addEventListener("click", () => {
  //   alert("asdasdasdj");
  sidebarContainer.classList.add("visible");
  sidebar.classList.remove("closed");
  sidebar.classList.add("open");
});
