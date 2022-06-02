let menu = document.querySelector(".menu");
let options = document.querySelector(".options");
let menuText = document.querySelector(".menu p");
let menuIcon = document.querySelector(".fa-solid");
let list = document.querySelectorAll(".options li");
menu.addEventListener("click", () => {
  options.classList.toggle("hide");
  menuIcon.classList.toggle("rotate");
});
list.forEach((li) => {
  li.addEventListener("click", () => {
    menuText.innerHTML = li.innerHTML;
    options.classList.add("hide");
    menuIcon.classList.toggle("rotate");
  });
});
