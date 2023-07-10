let newTitle = "Titulo Agregado desde Javascript";
document.getElementById("demo1").innerHTML = newTitle;

/*++++++++++++++++++++++++++++++++++++practica 1 crear un comentario en consola  y en pantalla+++++++++++++++++++++++++++++++*/

console.log("Hello World");

document.getElementById("demo2").innerHTML = "Hello World";

/*++++++++++++++++++++++++++++++++++++Usuario cambiando titulo no parte de la practica+++++++++++++++++++++++++++*/



function changeTitle() {
  let text = document.getElementById("textInput").value;
  document.title = text;
  document.getElementById("demo1").innerHTML = text;

  return false;
}

/* +++++++++++++++++++++++++++++++++++practica 2 crear comentario ++++++++++++++++++++++++++++++++++++++++++++*/

