var loader = document.getElementById("loader");
var dataList = document.getElementById("dataList");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    loader.style.display = "none"; // Hide the loader

    data.forEach(item => {
      var listItem = document.createElement("li");
      listItem.textContent = item.title;
      dataList.appendChild(listItem);
    });
  })
  .catch(error => {
    loader.textContent = "Error occurred while fetching data.";
    console.log(error);
  });
