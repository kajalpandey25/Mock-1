function addItem() {
    var input = document.getElementById("inputBox");
    var value = input.value;
    var itemList = document.getElementById("itemList");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(value));
    itemList.appendChild(listItem);
    input.value = "";
  }