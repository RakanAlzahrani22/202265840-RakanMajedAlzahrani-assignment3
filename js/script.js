
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



// GitHub repositories loader
const loadReposBtn = document.getElementById("loadReposBtn");
const githubStatus = document.getElementById("githubStatus");
const githubRepos = document.getElementById("githubRepos");

if (loadReposBtn && githubStatus && githubRepos) {
  loadReposBtn.addEventListener("click", function () {
    githubStatus.textContent = "Loading repositories...";
    githubRepos.innerHTML = "";

    fetch("https://api.github.com/users/RakanAlzahrani22/repos?sort=updated")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories.");
        }
        return response.json();
      })
      .then(function (repos) {
        if (!Array.isArray(repos) || repos.length === 0) {
          githubStatus.textContent = "No repositories found.";
          return;
        }

        githubStatus.textContent = `Loaded ${repos.length} repository(ies).`;

        repos.slice(0, 6).forEach(function (repo) {
          const card = document.createElement("article");
          card.className = "github-card";

          card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description ? repo.description : "No description provided."}</p>
            <div class="github-meta">
              Language: ${repo.language ? repo.language : "Not specified"}
            </div>
            <a class="github-link" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          `;

          githubRepos.appendChild(card);
        });
      })
      .catch(function () {
        githubStatus.textContent = "Failed to load GitHub repositories. Please try again later.";
      });
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
