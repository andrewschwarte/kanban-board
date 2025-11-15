document.getElementById("removeBtn").addEventListener("click", () => {
  removeItem();
});

document.getElementById("addBtn").addEventListener("click", () => {
  addItem();
});

function removeItem() {
  const ulParent = document.getElementById("parent");

  ulParent.removeChild(ulParent.lastElementChild);
}

function addItem() {
  let input = prompt("enter new item");

  const ulParent = document.getElementById("parent");

  const newItem = document.createElement("li");

  newItem.innerHTML = input;

  ulParent.appendChild(newItem);
}
