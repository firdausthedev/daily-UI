const left_btn = document.querySelector(".left-btn")! as HTMLButtonElement;
const right_btn = document.querySelector(".right-btn")! as HTMLButtonElement;

const hamburger = document.querySelector(".hamburger")! as HTMLDivElement;

let x = 0;
const arr = ["1", "2", "3"];

function prevItem(): string {
  if (x === 0) {
    x = arr.length;
  }
  x = x - 1;
  return arr[x];
}

function nextItem(): string {
  x = x + 1;
  x = x % arr.length;
  return arr[x];
}

left_btn.addEventListener("click", () => {
  let current = x + 1;
  let prev = prevItem();

  document.querySelector(`.bg-img-${current}`)!.classList.add("hidden");
  document.querySelector(`.bg-img-${prev}`)!.classList.remove("hidden");

  document.querySelector(`.text-${current}`)!.classList.add("hidden");
  document.querySelector(`.text-${prev}`)!.classList.remove("hidden");
});

right_btn.addEventListener("click", () => {
  let current = x + 1;
  let next = nextItem();
  document.querySelector(`.bg-img-${current}`)!.classList.add("hidden");
  document.querySelector(`.bg-img-${next}`)!.classList.remove("hidden");

  document.querySelector(`.text-${current}`)!.classList.add("hidden");
  document.querySelector(`.text-${next}`)!.classList.remove("hidden");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  document.querySelector("header")!.classList.toggle("open");
  document.querySelector(".hero")!.classList.toggle("open");
});

export {};
