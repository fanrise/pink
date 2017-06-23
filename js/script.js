var header_closed = document.querySelector(".main-header")
var burger = document.querySelector(".main-nav__burger a")

burger.addEventListener("click", function(event) {
  event.preventDefault();
  header_closed.classList.toggle("main-header--closed");
});
