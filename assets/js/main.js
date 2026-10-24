const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-is-open", open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-is-open");
  }));
}
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    // Replace this placeholder with the official MEA contact email before launch.
    const recipient = "ADD_OFFICIAL_MEA_EMAIL_HERE";
    if (recipient.includes("ADD_OFFICIAL")) {
      document.querySelector("#formNote").textContent = "The form is ready, but the official MEA email must be added in assets/js/main.js before it can prepare an email.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`MEA Website — ${data.get("topic")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
