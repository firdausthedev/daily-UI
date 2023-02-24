// Constants
const FIELD_REQUIRED = "This field is required";
const EMAIL_INVALID_FORMAT = "Email if not formatted correctly";
const PLAN_YEARLY = "2 months free";

// inputs
const name_input = document.getElementById("name")! as HTMLInputElement;
const email_input = document.getElementById("email")! as HTMLInputElement;
const phone_input = document.getElementById("phone")! as HTMLInputElement;
const form_4_submit = document.querySelector(
  ".form-4 #submit",
)! as HTMLInputElement;

const price_toggle = document.getElementById(
  "plan-toggle",
)! as HTMLInputElement;
const online_cb = document.getElementById("addons-online")! as HTMLInputElement;
const larger_cb = document.getElementById(
  "addons-larger-storage",
)! as HTMLInputElement;
const custom_cb = document.getElementById("addons-custom")! as HTMLInputElement;

// helpers
const name_helpers = document.querySelector(
  ".helper-name",
)! as HTMLParagraphElement;
const email_helpers = document.querySelector(
  ".helper-email",
)! as HTMLParagraphElement;
const phone_helpers = document.querySelector(
  ".helper-phone",
)! as HTMLParagraphElement;

// buttons
const form_1_next = document.querySelector(
  ".form-1 button",
)! as HTMLButtonElement;
const form_2_prev = document.querySelector(
  ".form-2 button.prev",
)! as HTMLButtonElement;
const form_2_next = document.querySelector(
  ".form-2 button.next",
)! as HTMLButtonElement;
const form_3_prev = document.querySelector(
  ".form-3 button.prev",
)! as HTMLButtonElement;
const form_3_next = document.querySelector(
  ".form-3 button.next",
)! as HTMLButtonElement;
const form_4_prev = document.querySelector(
  ".form-4 button.prev",
)! as HTMLButtonElement;
const form_4_change = document.querySelector(
  ".form-4 button.change",
)! as HTMLButtonElement;

const show_form = (currentForm: number, nextForm: number) => {
  document.querySelector(`.form-${currentForm}`)!.classList.add("hidden");
  document.querySelector(`.form-${nextForm}`)!.classList.remove("hidden");
};

// nav functions
const set_active_nav = (num: number) => {
  document.querySelectorAll(".nav").forEach(item => {
    item.classList.remove("active-nav");
  });

  document.querySelector(`.nav-${num}`)!.classList.add("active-nav");
};

// form-1 functions
const validate_form_1 = () => {
  const isName = is_valid_input(name_input, name_helpers);
  const isEmail = is_valid_input(email_input, email_helpers);
  const isPhone = is_valid_input(phone_input, phone_helpers);

  if (isName && isEmail && isPhone) {
    set_active_nav(2);
    show_form(1, 2);
  }
};

const is_valid_input = (
  input: HTMLInputElement,
  helper: HTMLParagraphElement,
): boolean => {
  if (input.value === "") {
    helper.textContent = FIELD_REQUIRED;
    return false;
  }
  if (input.type === "email" && !validate_email(input.value)) {
    helper.textContent = EMAIL_INVALID_FORMAT;
    return false;
  } else {
    helper.textContent = "";
    return true;
  }
};

const validate_email = (email_string: string) => {
  return String(email_string)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

// form-2 function
const show_yearly_msg = (isShow: boolean) => {
  document.querySelectorAll(".plan-toggle")!.forEach(item => {
    item.classList.remove("active-toggle");
  });
  if (isShow) {
    document.querySelectorAll(".yearly-msg")!.forEach(item => {
      item.textContent = PLAN_YEARLY;
    });
    document.querySelector(".form-2 .plan-price-1")!.textContent = "$90/yr";
    document.querySelector(".form-2 .plan-price-2")!.textContent = "$120/yr";
    document.querySelector(".form-2 .plan-price-3")!.textContent = "$150/yr";

    document.querySelector(".plan-yearly")!.classList.add("active-toggle");
  } else {
    document.querySelectorAll(".yearly-msg")!.forEach(item => {
      item.textContent = "";
    });

    document.querySelector(".form-2 .plan-price-1")!.textContent = "$9/mo";
    document.querySelector(".form-2 .plan-price-2")!.textContent = "$12/mo";
    document.querySelector(".form-2 .plan-price-3")!.textContent = "$150/mo";

    document.querySelector(".plan-monthly")!.classList.add("active-toggle");
  }
};

// form-3 function
const show_active_checkbox = (isShow: boolean, num: number) => {
  if (isShow) {
    document.querySelector(`.addon-${num}`)!.classList.add("active-checkbox");
  } else {
    document
      .querySelector(`.addon-${num}`)!
      .classList.remove("active-checkbox");
  }
};

const show_addon_price = (isYearlyPlan: boolean) => {
  if (isYearlyPlan) {
    document.querySelector(".addon-1 .addon-price")!.textContent = "+$10/yr";
    document.querySelector(".addon-2 .addon-price")!.textContent = "+$20/yr";
    document.querySelector(".addon-3 .addon-price")!.textContent = "+$20/yr";
  } else {
    document.querySelector(".addon-1 .addon-price")!.textContent = "+$1/mo";
    document.querySelector(".addon-2 .addon-price")!.textContent = "+$2/mo";
    document.querySelector(".addon-3 .addon-price")!.textContent = "+$2/mo";
  }
};

// form-4 function
const show_plan = () => {
  const plan_radio = document.querySelector(
    'input[name="price-plan"]:checked',
  )! as HTMLInputElement;

  if (plan_radio.value === "price-arcade") {
    if (price_toggle.checked) {
      document.querySelector(".form-4 .plan")!.textContent = "Arcade (Yearly)";
      document.querySelector(".form-4 .plan-price")!.textContent = "$90/yr";
    } else {
      document.querySelector(".form-4 .plan")!.textContent = "Arcade (Monthly)";
      document.querySelector(".form-4 .plan-price")!.textContent = "$9/mo";
    }
  } else if (plan_radio.value === "price-advanced") {
    if (price_toggle.checked) {
      document.querySelector(".form-4 .plan")!.textContent = "Advance (Yearly)";
      document.querySelector(".form-4 .plan-price")!.textContent = "$120/yr";
    } else {
      document.querySelector(".form-4 .plan")!.textContent =
        "Advance (Monthly)";
      document.querySelector(".form-4 .plan-price")!.textContent = "$12/mo";
    }
  } else {
    if (price_toggle.checked) {
      document.querySelector(".form-4 .plan")!.textContent = "Pro (Yearly)";
      document.querySelector(".form-4 .plan-price")!.textContent = "$150/yr";
    } else {
      document.querySelector(".form-4 .plan")!.textContent = "Pro (Monthly)";
      document.querySelector(".form-4 .plan-price")!.textContent = "$15/mo";
    }
  }
};

const show_addon = () => {
  if (online_cb.checked) {
    document.querySelector(".form-4 .addon-1")!.classList.remove("hidden");
    if (price_toggle.checked) {
      document.querySelector(".form-4 .addon-1 .price")!.textContent = "$10/yr";
    } else {
      document.querySelector(".form-4 .addon-1 .price")!.textContent = "$1/mo";
    }
  } else {
    document.querySelector(".form-4 .addon-1")!.classList.add("hidden");
  }
  if (larger_cb.checked) {
    document.querySelector(".form-4 .addon-2")!.classList.remove("hidden");
    if (price_toggle.checked) {
      document.querySelector(".form-4 .addon-2 .price")!.textContent = "$20/yr";
    } else {
      document.querySelector(".form-4 .addon-2 .price")!.textContent = "$2/mo";
    }
  } else {
    document.querySelector(".form-4 .addon-2")!.classList.add("hidden");
  }
  if (custom_cb.checked) {
    document.querySelector(".form-4 .addon-3")!.classList.remove("hidden");
    if (price_toggle.checked) {
      document.querySelector(".form-4 .addon-3 .price")!.textContent = "$20/yr";
    } else {
      document.querySelector(".form-4 .addon-3 .price")!.textContent = "$2/mo";
    }
  } else {
    document.querySelector(".form-4 .addon-3")!.classList.add("hidden");
  }
};

const show_total = () => {
  const plan_radio = document.querySelector(
    'input[name="price-plan"]:checked',
  )! as HTMLInputElement;
  let price: number = 0;
  if (price_toggle.checked) {
    if (online_cb.checked) {
      price += 10;
    }
    if (larger_cb.checked) {
      price += 20;
    }
    if (custom_cb.checked) {
      price += 20;
    }
    if (plan_radio.value === "price-arcade") {
      price += 90;
    }
    if (plan_radio.value === "price-advanced") {
      price += 120;
    }
    if (plan_radio.value === "price-pro") {
      price += 150;
    }

    document.querySelector(".form-4 .total")!.textContent = "Total (per year)";
    document.querySelector(
      ".form-4 .total-price",
    )!.textContent = `$${price}/yr`;
  } else {
    if (online_cb.checked) {
      price += 1;
    }
    if (larger_cb.checked) {
      price += 2;
    }
    if (custom_cb.checked) {
      price += 2;
    }
    if (plan_radio.value === "price-arcade") {
      price += 9;
    }
    if (plan_radio.value === "price-advanced") {
      price += 12;
    }
    if (plan_radio.value === "price-pro") {
      price += 15;
    }

    document.querySelector(".form-4 .total")!.textContent = "Total (per month)";
    document.querySelector(
      ".form-4 .total-price",
    )!.textContent = `$${price}/mo`;
  }
};

//  Event listeners
form_1_next.addEventListener("click", e => {
  validate_form_1();
});

form_2_prev.addEventListener("click", e => {
  set_active_nav(1);
  show_form(2, 1);
});

form_2_next.addEventListener("click", e => {
  set_active_nav(3);
  show_form(2, 3);
});

form_3_prev.addEventListener("click", e => {
  set_active_nav(2);
  show_form(3, 2);
});

form_3_next.addEventListener("click", e => {
  set_active_nav(4);
  show_form(3, 4);
  show_plan();
  show_addon();
  show_total();
});

form_4_prev.addEventListener("click", e => {
  set_active_nav(3);
  show_form(4, 3);
});

form_4_change.addEventListener("click", e => {
  set_active_nav(2);
  show_form(4, 2);
});

form_4_submit.addEventListener("click", e => {
  e.preventDefault();
  set_active_nav(4);
  show_form(4, 5);
});

price_toggle.addEventListener("change", e => {
  show_yearly_msg(price_toggle.checked);
  show_addon_price(price_toggle.checked);
});

online_cb.addEventListener("change", e => {
  show_active_checkbox(online_cb.checked, 1);
});

larger_cb.addEventListener("change", e => {
  show_active_checkbox(larger_cb.checked, 2);
});

custom_cb.addEventListener("change", e => {
  show_active_checkbox(custom_cb.checked, 3);
});
