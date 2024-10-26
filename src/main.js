const burger = document.getElementById("burger_icon");
const cancel = document.getElementById("cancel_icon");
const burger_menu = document.getElementById("burger_menu");

burger.addEventListener("click", function () {
  burger.classList.add("hidden");
  cancel.classList.remove("hidden");
  cancel.classList.add("block");
  burger_menu.classList.remove("hidden");
  burger_menu.classList.add("flex", "flex-col", "justify-center", "items-center");
});

cancel.addEventListener("click", function () {
  cancel.classList.add("hidden");
  burger.classList.remove("hidden");
  burger.classList.add("block");
  
  burger_menu.classList.remove("flex", "flex-col", "justify-center", "items-center");
  burger_menu.classList.add("hidden");
});
