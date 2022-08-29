let input = document.getElementById("input");
let keys = document.getElementById("keybord");

keys.addEventListener("click", (event) => {
  if (
    event.target.tagName == "BUTTON" &&
    event.target.innerHTML !== "SPACE" &&
    event.target.innerHTML !== "CAPS LOCK"
  ) {
    input.value += event.target.innerHTML;
  } else if (event.target.innerHTML == "SPACE") {
    input.value += " ";
  } else if (event.target.innerHTML == "CAPS LOCK") {
    input.value.toUpperCase;
  }
});
