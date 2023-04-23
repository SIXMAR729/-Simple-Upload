
const img = document.querySelector("img");
const input_f = document.querySelector("input");

input_f.addEventListener("change", () => {
  img.src = URL.createObjectURL(input_f.files[0]);
});