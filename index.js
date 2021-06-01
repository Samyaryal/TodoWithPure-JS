const addButton = document.getElementById("addBtn");
const ulElement = document.getElementById("mytodo");
const myInput = document.getElementById("myInput");

addButton.addEventListener("click", function () {
  let newTodo = document.createElement("li")
  newTodo.innerText = myInput.value;
  console.log(newTodo.innerText)

  if (myInput.value === '') {
    alert('Please type STH!');
    return;
  }

  ulElement.appendChild(newTodo);
  myInput.value = " "

  //creating the remove button
  let delButton = document.createElement("button");
  delButton.textContent = "Remove"
  newTodo.appendChild(delButton);

  //marking the done 
  newTodo.addEventListener("click", function () {
    newTodo.style.textDecoration = "line-through";
  })

  // deleting the todo
  delButton.addEventListener("click", function () {
    ulElement.removeChild(newTodo)
  });

})



