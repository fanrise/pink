var header_closed = document.querySelector(".main-header")
var burger = document.querySelector(".main-nav__burger a")

burger.addEventListener("click", function(event) {
  event.preventDefault();
  header_closed.classList.toggle("main-header--closed");
});



var btn_first = document.querySelector(".radio__btn--first")
var btn_second = document.querySelector(".radio__btn--second")
var btn_third = document.querySelector(".radio__btn--third")
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


var p_btn_first = document.querySelector(".price-radio__btn--first")
var p_btn_second = document.querySelector(".price-radio__btn--second")
var p_btn_third = document.querySelector(".price-radio__btn--third")
var p_rev = document.querySelector(".price-table")


p_btn_first.addEventListener("click", function(event) {
  p_rev.classList.add("price-table--first");
  p_rev.classList.remove("price-table--second");
  p_rev.classList.remove("price-table--third");
});
p_btn_second.addEventListener("click", function(event) {
  p_rev.classList.remove("price-table--first");
  p_rev.classList.add("price-table--second");
  p_rev.classList.remove("price-table--third");
});
p_btn_third.addEventListener("click", function(event) {
  p_rev.classList.remove("price-table--first");
  p_rev.classList.remove("price-table--second");
  p_rev.classList.add("price-table--third");
});
