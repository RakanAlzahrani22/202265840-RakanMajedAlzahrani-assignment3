
// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme Toggles
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}

// Project search filter
const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const searchStatus = document.getElementById("searchStatus");
const emptyState = document.getElementById("emptyState");

if (projectSearch) {
  projectSearch.addEventListener("input", function () {
    const query = projectSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    projectCards.forEach(function (card) {
  const searchableText = (card.dataset.search || "").toLowerCase();
  const matches = searchableText.includes(query);

  if (matches) {
    card.style.display = "";
    visibleCount++;
  } else {
    card.style.display = "none";
  }
});

    if (query === "") {
      searchStatus.textContent = "Showing all projects.";
    } else {
      searchStatus.textContent = `Found ${visibleCount} project(s).`;
    }

    if (visibleCount === 0) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
    }
  });

  searchStatus.textContent = "Showing all projects.";
}

// Contact form validation
const form = document.querySelector(".contact-form");

if (form) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.style.display = "none";
    formSuccess.classList.remove("show");

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameValue === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    if (emailValue === "") {
      emailError.textContent = "Please enter your email.";
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (messageValue === "") {
      messageError.textContent = "Please enter your message.";
      isValid = false;
    } else if (messageValue.length < 10) {
      messageError.textContent = "Message should be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
    formSuccess.style.display = "block";

    setTimeout(function () {
      formSuccess.classList.add("show");
    }, 10);

    form.reset();
  }
  });
}
