const hamburguesa = document.querySelector(".hamburguesa")
const navMenu = document.querySelector(".navMenu")
const principal = document.querySelector(".principal")

hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("active");
  navMenu.classList.toggle("active");
  principal.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
  hamburguesa.classList.remove("active");
  navMenu.classList.remove("active");
  principal.classList.remove("active");
}));