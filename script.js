// script.js

//run function when the page finishes loading
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});

function loadHeader() {
  //find placeholder element
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (!headerPlaceholder) return; //don't run if no placeholder

  //fetch header HTML
  fetch("_header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.text();
    })
    .then((data) => {
      //inject the header html into the placeholder
      headerPlaceholder.innerHTML = data;

      //after loading update the user's name
      updateUserName();
    })
    .catch((error) => {
      console.error("Error loading header:", error);
      headerPlaceholder.innerHTML = "<p>Error loading header.</p>";
    });
}

function updateUserName() {
  //find the name element inside the loaded header
  const userNameElement = document.getElementById("user-nav-name");

  //get the name from localStorage
  const userName = localStorage.getItem("userName");

  if (userName && userNameElement) {
    userNameElement.textContent = userName;
  }
}