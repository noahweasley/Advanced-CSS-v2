const cards = document.querySelectorAll(".card");
const moverTop = document.getElementById("mover-top");
const moverBottom = document.getElementById("mover-bottom");

let pos = 0;
const PAGE_OFFSET_END = cards.length;

const OFFSET_TOP = -130;
const OFFSET_BOTTOM = 130;
const __bottom = "card card__offset-bottom";
const __top = "card card__offset-top";
const __middle = "card card__offset-default";

const _cards = Array.from(cards);

moverTop.addEventListener("click", () => {
  console.log(pos);

  if (pos >= PAGE_OFFSET_END - 1) return;

  let prev = _cards[pos];
  let current = _cards[pos + 1];
  let next = _cards[pos + 2];

  if (prev) prev.className = __top;
  if (current) current.className = __middle;
  if (next) next.className = __bottom;

  ++pos;
});

moverBottom.addEventListener("click", () => {
  console.log(pos);
  if (pos < 0) return;

  let prev = _cards[pos];
  let current = _cards[pos + 1];

  if (prev) prev.className = __middle;
  if (current) current.className = __bottom;

  --pos;
});

setTimeout(() => {
  document.querySelector(".frame").classList.remove("gone");
  document.getElementsByTagName("h1")[0].classList.add("gone");
}, 2000);
