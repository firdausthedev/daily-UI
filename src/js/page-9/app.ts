const submit_btn = document.getElementById("submit")! as HTMLInputElement;
const email = document.getElementById("email")! as HTMLInputElement;
const email_helper = document.querySelector("form p")! as HTMLParagraphElement;

submit_btn.addEventListener("click", e => {
  e.preventDefault();
  if (!email.value) {
    email_helper.textContent = "Check your email please";
  } else {
    email_helper.textContent = "";
  }
});
export {};
