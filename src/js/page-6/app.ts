const quote = document.querySelector("h2")! as HTMLHeadingElement;
const quoteID = document.querySelector("p")! as HTMLParagraphElement;

const diceBtn = document.querySelector("button")! as HTMLButtonElement;

interface Slip {
  slip: {
    advice: string;
    id: number;
  };
}

const fetchQuote = async () => {
  const data = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  });
  const res: Slip = await data.json();
  return res;
};

const setQuote = () => {
  fetchQuote()
    .then(data => {
      quote.textContent = `"${data.slip.advice}"`;
      quoteID.textContent = `ADVICE #${data.slip.id}`;
    })
    .catch(() => {
      quote.textContent = "Oops.. Something went wrong";
    });
};

document.addEventListener("DOMContentLoaded", () => {
  quote.textContent = "loading...";
  quoteID.textContent = "";
  setQuote();
});

diceBtn.addEventListener("click", () => {
  quote.textContent = "loading...";
  quoteID.textContent = "";
  setTimeout(() => {
    setQuote();
  }, 2000);
});
