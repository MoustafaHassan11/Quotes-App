// var quoteList = [
//   {
//     text: "Resentment is like drinking poison and waiting for your enemies to die.",
//     author: "Nelson Mandela",
//   },
//   {
//     text: "You miss 100% of the shots you don't take.",
//     author: "Wayne Gretzky",
//   },
//   {
//     text: "Do not take life too seriously. You will not get out alive.",
//     author: "Elbert Hubbard",
//   },
//   {
//     text: "Life is what happens when you're busy making other plans.",
//     author: "John Lennon",
//   },
// ];

// function display() {
//   var randomIndex = Math.floor(Math.random() * quoteList.length);
//   var quote = quoteList[randomIndex].text;
//   var author = quoteList[randomIndex].author;

//   document.getElementById("qoute").innerHTML = quote;
//   document.getElementById("qoute-author").innerHTML = "- " + author;
// }

var quoteList = [
  {
    text: "Resentment is like drinking poison and waiting for your enemies to die.",
    author: "Nelson Mandela",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Do not take life too seriously. You will not get out alive.",
    author: "Elbert Hubbard",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
];

var currentQuoteIndex = 0;

function display() {
  if (currentQuoteIndex >= quoteList.length) {
    currentQuoteIndex = 0;
  }

  var quote = quoteList[currentQuoteIndex].text;
  var author = quoteList[currentQuoteIndex].author;

  document.getElementById("qoute").innerHTML = quote;
  document.getElementById("qoute-author").innerHTML = "- " + author;

  currentQuoteIndex++;
}
