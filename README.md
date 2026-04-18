# Assignment 2 – Interactive Portfolio Website

This project is my Assignment 2 submission for SWE 363. It builds on my Assignment 1 personal portfolio website by adding interactive features, improved user feedback, and a more modern user experience using JavaScript, CSS transitions, and browser storage.

## Project Overview

The website presents my personal portfolio through three main sections:

- **About Me** – a short introduction about my background and interests
- **Projects** – two academic JavaFX projects I worked on
- **Contact** – a contact form with client-side validation and feedback

This version improves the original portfolio by adding interactive and dynamic behavior.

## Features

### Interactive Features
- **Live project search/filter**
  - Users can type into the search field to filter projects by title or technology
  - Matching projects remain visible while others are hidden
  - An empty-state message appears when no projects match the search

- **Theme toggle**
  - Users can switch between dark mode and light mode
  - The selected theme is saved using `localStorage`
  - The theme remains the same after refreshing the page

### Form Validation and Feedback
- The contact form validates:
  - empty name field
  - empty email field
  - invalid email format
  - short or empty message
- Clear inline error messages are shown under each field
- A success message appears when the form is submitted correctly

### User Experience Improvements
- Smooth hover effects on buttons and project cards
- Animated success message for valid form submission
- Responsive layout for different screen sizes

## Technologies Used

- HTML5
- CSS3
- JavaScript
- JavaFX (for showcased projects)
- Git and GitHub
- Browser `localStorage`

## Project Structure

```text
assignment-2/
├── README.md
├── index.html
├── styles.css
├── script.js
├── profileimage.png
├── facelite.png
├── ResourceReservingSystem.png
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
