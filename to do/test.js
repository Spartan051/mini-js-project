let box = document.querySelector(".box");
let text = document.querySelector(".text");
let submit = document.querySelector(".submit");
let button = document.querySelector(".button");
if (box.children.length == 0) {
  console.log("ok");
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!text.value) {
    return;
  }

  newItem();
  text.value = "";
  if (box.children.length == 2 && document.querySelector(".h1") !== null) {
    let selectedH1 = document.querySelector(".h1");
    selectedH1.remove();
  }
});

box.addEventListener("click", (e) => {
  if (e.target.className == "button") {
    e.target.parentNode.remove();
    if (box.children.length == 0) {
      let h1 = document.createElement("h1");
      h1.innerText = "no item show";
      h1.className = "h1";
      box.appendChild(h1);
    }
  }
});

const newItem = () => {
  let newItem = document.createElement("div");
  newItem.className = "item";
  let newSpan = document.createElement("span");
  newSpan.innerText = text.value;
  let newButton = document.createElement("button");
  newButton.className = "button";
  newButton.innerText = "delete";
  newItem.appendChild(newSpan);
  newItem.appendChild(newButton);
  box.appendChild(newItem);
};
