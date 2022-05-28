let create = document.querySelector("input");
create.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("test", e.target.id);
});


let target = document.querySelector("#addbox");
target.addEventListener("dragover", (e) => {
  console.log("dragover");
  e.preventDefault();
});


target.addEventListener("drop", (e) => {
  let data = e.dataTransfer.getData("test");
  let newdata = document.getElementById(data).value;
  let newitem = document.createElement("h1");
  newitem.innerText = newdata;
  console.log(newitem);
  e.target.appendChild(newitem);
});
