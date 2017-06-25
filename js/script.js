var header_closed = document.querySelector(".main-header")
var burger = document.querySelector(".main-nav__burger a")

burger.addEventListener("click", function(event) {
  event.preventDefault();
  header_closed.classList.toggle("main-header--closed");
});



var btn_first = document.querySelector(".radio__btn--first")
var btn_second = document.querySelector(".radio__btn--second")
var btn_third = document.querySelector(".radio__btn--third")
// var rev1 = document.querySelector(".reviews__item:nth-child(1)")
// var rev2 = document.querySelector(".reviews__item:nth-child(2)")
// var rev3 = document.querySelector(".reviews__item:nth-child(3)")
var rev = document.querySelector(".reviews__item-container")


btn_first.addEventListener("click", function(event) {
  rev.classList.add("reviews__item-container--first");
  rev.classList.remove("reviews__item-container--second");
  rev.classList.remove("reviews__item-container--third");
});
btn_second.addEventListener("click", function(event) {
  rev.classList.remove("reviews__item-container--first");
  rev.classList.add("reviews__item-container--second");
  rev.classList.remove("reviews__item-container--third");
});
btn_third.addEventListener("click", function(event) {
  rev.classList.remove("reviews__item-container--first");
  rev.classList.remove("reviews__item-container--second");
  rev.classList.add("reviews__item-container--third");
});
