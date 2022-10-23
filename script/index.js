const menu = document.querySelector(".burguer");
const Burguer = document.querySelector(".close_burguer");
const clazz = "close_burguer_open";
const clazzInitial = "close_burguer";

const handleOpenMenu = () => {
  menu.style.display = "none";
  Burguer.classList.remove(clazzInitial);
  Burguer.classList.add(clazz);
};
const handleCloseMenu = () => {
  menu.style.display = "block";
  Burguer.classList.remove(clazz);
  Burguer.classList.add(clazzInitial);
};

menu.addEventListener("click", handleOpenMenu);
Burguer.addEventListener("click", handleCloseMenu);
