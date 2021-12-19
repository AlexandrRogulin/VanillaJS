const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "maroon", "lime", "navy", "olive", "orange", "purple", "silver"];
const btn = document.getElementById("new-quote");
const color = document.querySelector(".color");
const quoteBase = [
    {
      quote: "Time is a waste of money.",
      author: "Oskar Wilde",
    },
    {
      quote: "To be natural is such a very difficult pose to keep up.",
      author: "Oskar Wilde",
    },
    {
      quote:
        "Boys think girls are like books, If the cover doesn’t catch their eye they won’t bother to read what’s inside.",
      author: "Marilyn Monroe",
    },
    {
      quote: "You never know what life is like, until you have lived it.",
      author: "Marilyn Monroe",
    },
    {
      quote: "I am always ready to learn, but I do not always like being taught.",
      author: "Winstone Cherchile",
    },
    {
      quote: "Study history. In history lies all the secrets of statecraft.",
      author: "Winstone Cherchile",
    },
  ];

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  generateQuate();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
window.onload = init;
function init() {
  generateQuate();
}

function generateQuate() {
  let quoteSize = quoteBase.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = quoteBase[randomIndex];
  let twitterLink = "http://twitter.com/intent/tweet";

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
}
