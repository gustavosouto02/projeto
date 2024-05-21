const form = document.querySelector(".form-contato");
const mask = document.querySelector(".mask-form");

function mostrarForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mask.style.visibility = "visible";
}

function esconderForm() {
  mask.style.visibility = "hidden";
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
}
