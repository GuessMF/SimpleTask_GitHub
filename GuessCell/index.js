let table = document.getElementById("table");

let td = document.getElementsByClassName("one");

let changedTds = document.getElementsByClassName("one toFind");

let randomNums = [];
let founted = [];

for (n = 0; n < 10; n++) {
  let num = Math.floor(Math.random() * 99) + 1;
  td[num].classList.add("toFind");
  randomNums.push(num);
}

function addNums() {
  if (changedTds.length != 10) {
    let num = Math.floor(Math.random() * 99) + 1;
    td[num].classList.add("toFind");
    randomNums.push(num);
  }
}
addNums();
addNums();

function finish() {
  if (founted.length == changedTds.length) {
    alert("you won");
  }
}

table.addEventListener("mouseover", (event) => {
  console.log(event.target);
  if (event.target != table && event.target.classList == "one toFind") {
    event.target.classList.add("red");
    founted.push(event.target);
  }
  document.getElementById("founted").innerHTML = founted.length;
  document.getElementById("changed").innerHTML = changedTds.length;
  finish();
});
