// This is script.js

// Run this function when the web page finishes loading
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});

function loadHeader() {
  // Find the placeholder element
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (!headerPlaceholder) return; // Don't run if no placeholder

  // Fetch the header HTML
  fetch("_header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Inject the header HTML into the placeholder
      headerPlaceholder.innerHTML = data;

      // After loading, update the user's name
      updateUserName();
    })
    .catch((error) => {
      console.error("Error loading header:", error);
      headerPlaceholder.innerHTML = "<p>Error loading header.</p>";
    });
}

function updateUserName() {
  // Find the name element inside the loaded header
  const userNameElement = document.getElementById("user-nav-name");

  // Get the name from localStorage
  const userName = localStorage.getItem("userName");

  if (userName && userNameElement) {
    userNameElement.textContent = userName;
  }
}