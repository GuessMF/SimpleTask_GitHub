let input = document.getElementById("input");
let keys = document.getElementById("keyboard");
let caps = false;

keys.addEventListener("click", (event) => {
  if (
    event.target.tagName == "BUTTON" &&
    event.target.innerHTML !== "SPACE" &&
    event.target.innerHTML !== "CAPS LOCK" &&
    event.target.innerHTML !== "DELETE" && // не работает ДЕЛИТ
    caps == false
  ) {
    console.log(event.target.innerHTML);
    input.value += event.target.innerHTML;
  } else if (event.target.innerHTML == "SPACE") {
    input.value += " ";
  } else if (event.target.innerHTML == "CAPS LOCK" && caps == false) {
    caps = true;
  } else if (event.target.innerHTML == "CAPS LOCK" && caps == true) {
    caps = false;
  } else if (event.target.tagName !== "DIV") {
    input.value += event.target.innerHTML.toUpperCase();
  } else if (event.target.innerHTML == "DELETE") {
    input.value -= " ";
    console.log("back");
  }
});
