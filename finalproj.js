let submitButton = document.getElementById("submitBtn");

let modal = document.getElementById("popup");

submitButton.onclick = function () {
  modal.style.display = "block";
  console.log("working")
}


let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
  console.log("working")
}