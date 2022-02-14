let cardPos = 45.1;
let cardIndex = 0;

function moveCarousel(percent) {
  let carousel = document.querySelector(".carousel");
  cardPos = cardPos + percent;
  carousel.style.setProperty("--card-pos", `${cardPos}%`);
  cardIndex -= percent / 10;
}

document.querySelectorAll(".mover").forEach((element) => {
  element.addEventListener("click", () => {
    if (element.id === "mover__right") {
      if (cardPos === -44.9) return;
      moveCarousel(-10);
    } else {
      if (cardPos === 45.1) return;
      moveCarousel(10);
    }

    // scale cards

    let cards = document.querySelectorAll(".card");

    cards.forEach((elem) => {
      elem.classList.remove("card__scaled");
      cards[cardIndex].classList.add("card__scaled");
    });
  });
});
