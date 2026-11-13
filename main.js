// Kestrel Bay Health: small progressive enhancements.
// The site works without JavaScript; this adds the mobile menu toggle and
// accessible form validation.


document.documentElement.classList.add("js");

/* ---------- Mobile navigation toggle ---------- */

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    header.classList.toggle("is-open", !isOpen);
  });

  // Escape closes the menu and returns focus to the button
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      navToggle.setAttribute("aria-expanded", "false");
      header.classList.remove("is-open");
      navToggle.focus();
    }
  });
}

/* ---------- Find a Provider form validation (WCAG 3.3.1, 3.3.2) ---------- */

const form = document.querySelector(".search-card");

if (form) {
  const status = form.querySelector(".search-status");

  const rules = [
    {
      input: form.querySelector("#specialty"),
      error: form.querySelector("#specialty-error"),
      isValid: (value) => value.trim().length > 0,
    },
    {
      input: form.querySelector("#zip"),
      error: form.querySelector("#zip-error"),
      // Accept a city name, or exactly 5 digits if it's a number
      isValid: (value) => {
        const v = value.trim();
        if (v.length === 0) return false;
        return /^\d+$/.test(v) ? /^\d{5}$/.test(v) : true;
      },
    },
  ];

  const showError = (rule, show) => {
    rule.error.hidden = !show;
    if (show) {
      rule.input.setAttribute("aria-invalid", "true");
    } else {
      rule.input.removeAttribute("aria-invalid");
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalid = null;

    rules.forEach((rule) => {
      const valid = rule.isValid(rule.input.value);
      showError(rule, !valid);
      if (!valid && !firstInvalid) firstInvalid = rule.input;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      status.textContent = "";
      return;
    }

    const specialty = rules[0].input.value.trim();
    const place = rules[1].input.value.trim();
    status.textContent = `Showing ${specialty} providers near ${place}. (Demo site: no real results.)`;
  });

  // Clear an error as soon as the user fixes the field
  rules.forEach((rule) => {
    rule.input.addEventListener("input", () => {
      if (rule.input.getAttribute("aria-invalid") === "true" && rule.isValid(rule.input.value)) {
        showError(rule, false);
      }
    });
  });
}