function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  if (ev.target.className == "dropplace") {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    ev.target.appendChild(document.getElementById(data));
  }
}
