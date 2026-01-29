let arr = [3, 7, 2, 9, 5];
let target = 9;
let index = 0;

const arrayDiv = document.getElementById("array");
const message = document.getElementById("message");

// Create boxes
arr.forEach(value => {
  let box = document.createElement("div");
  box.className = "box";
  box.innerText = value;
  arrayDiv.appendChild(box);
});

let boxes = document.querySelectorAll(".box");

function startSearch() {
  if (index > 0) {
    boxes[index - 1].classList.remove("active");
  }

  if (index < arr.length) {
    boxes[index].classList.add("active");
    message.innerText = "Checking index " + index;

    if (arr[index] === target) {
      boxes[index].classList.add("found");
      message.innerText = "Element Found!";
      return;
    }
    index++;
    setTimeout(startSearch, 800);
  } else {
    message.innerText = "Element Not Found";
  }
}
