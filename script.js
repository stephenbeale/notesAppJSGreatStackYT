const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//If notes in the browser, will display on the page
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

//Updates data in browser
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  //Stores the p element as input box
  let inputBox = document.createElement("p");
  //stores image, too
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "p") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(
      (nt) =>
        (nt.onkeyup = function () {
          updateStorage();
        })
    );
  }
});
