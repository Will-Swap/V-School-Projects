const form = document.addItem;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = form.title.value;
  form.title.value = "";

  const addDiv = document.createElement("li");
  addDiv.textContent = title + " ";
  addDiv.style.margin = "10px";
  addDiv.textAlign = "center";

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "x"
  addDiv.appendChild(deleteButton)
  deleteButton.addEventListener("click", (event) => {
      document.getElementById("list").removeChild(addDiv)

  })


  document.getElementById("list").appendChild(addDiv);
})