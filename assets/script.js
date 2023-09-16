const toggleBtn = document.querySelector(".navigation-toggle");
const navigation = document.querySelector(".primary-header__inner");
const main = document.querySelector("main");

// Close the hangbugar when click on the toggle button
toggleBtn.addEventListener("click", () => {
  if (navigation.classList.contains("open")) {
    toggleBtn.src = "assets/images/icon-menu.svg";
    navigation.classList.remove("open");
  } else {
    toggleBtn.src = "assets/images/icon-menu-close.svg";
    navigation.classList.add("open");
  }
});
// Close the hangbugar when click on the outside the hangbugar is click
main.addEventListener("click", () => {
  if (navigation.classList.contains("open")) {
    toggleBtn.src = "assets/images/icon-menu.svg";
    navigation.classList.remove("open");
  }
});
console.log(navigation);
