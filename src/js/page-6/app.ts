const quote = document.querySelector("h2")! as HTMLHeadingElement;
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
  let res: Slip = await data.json();
  return res;
};

const setQuote = () => {
  fetchQuote()
    .then(data => {
      quote.textContent = `"${data.slip.advice}"`;
    })
    .catch(err => {
      quote.textContent = "Oops.. Something went wrong";
    });
};

document.addEventListener("DOMContentLoaded", () => {
  quote.textContent = "loading...";
  setQuote();
});

diceBtn.addEventListener("click", () => {
  quote.textContent = "loading...";
  setTimeout(() => {
    setQuote();
  }, 2000);
});
