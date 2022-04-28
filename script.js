const panels = document.querySelectorAll(".panel");
const panelsControl = document.querySelector(".panels");

panels.forEach(item => item.addEventListener("click",togglePanel));

function togglePanel(){
  panelsControl.classList.toggle("open-active");
  this.classList.toggle("open");
}