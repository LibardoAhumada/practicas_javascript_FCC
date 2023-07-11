

let newTitle = "Titulo Agregado desde Javascript";
document.getElementById("demo1").innerHTML = newTitle;

/*++++++++++++++++++++++++++++++++++++practica 1 crear un comentario en consola  y en pantalla+++++++++++++++++++++++++++++++*/

console.log("Hello World");

let subtitle = "Subtitulo Agregado desde JavaScript";
document.getElementById("demo2").innerHTML = subtitle;

/*++++++++++++++++++++++++++++++++++++Usuario cambiando titulo no parte de la practica+++++++++++++++++++++++++++*/



function changeTitle() {
  let text = document.getElementById("textInput").value;
  document.title = text;
  document.getElementById("demo1").innerHTML = text;

  return false;
}

/* +++++++++++++++++++++++++++++++++++practice 2 crear comentario ++++++++++++++++++++++++++++++++++++++++++++*/
/* +++++++++++++++++++++++++++++++++++practice 3 Algoritmo Sum ++++++++++++++++++++++++++++++++++++++++++++++++*/


function sumTwoNumbers() {
  let num1_a = document.getElementById("num1_a").value;
  let num2_b = document.getElementById("num1_b").value;
  let result1 = parseFloat(num1_a) + parseFloat(num2_b);
  document.getElementById("result1").innerHTML = result1;
  return false; // Para evitar que el formulario se envíe y la página se recargue
}

/* +++++++++++++++++++++++++++++++++++practice 3 Algoritmo Rest ++++++++++++++++++++++++++++++++++++++++++++++++*/

function restTwoNumbers() {
  let num2_a = document.getElementById("num2_a").value;
  let num2_b = document.getElementById("num2_b").value;
  let result2 = parseFloat(num2_a) - parseFloat(num2_b);
  document.getElementById("result2").innerHTML = result2;
  return false; // Para evitar que el formulario se envíe y la página se recargue
}

/* +++++++++++++++++++++++++++++++++++Practice 4 Multiply Algoritm  ++++++++++++++++++++++++++++++++++++++++++++++++*/


function multiTwoNumbers() {
  let num3_a = document.getElementById("num3_a").value;
  let num3_b = document.getElementById("num3_b").value;
  let result3 = parseFloat(num3_a) * parseFloat(num3_b);
  document.getElementById("result3").innerHTML = result3;
  return false; // Para evitar que el formulario se envíe y la página se recargue
}

/* +++++++++++++++++++++++++++++++++++ Practice Divide Algoritm ++++++++++++++++++++++++++++++++++++++++++++++++*/

function divTwoNumbers() {
  let num4_a = document.getElementById("num4_a").value;
  let num4_b = document.getElementById("num4_b").value;
  let result4 = parseFloat(num4_a) / parseFloat(num4_b);
  document.getElementById("result4").innerHTML = result4;
  return false; // Para evitar que el formulario se envíe y la página se recargue
}

/*+++++++++++++++++++++++++++++++++++Practice Potential +++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


function potTwoNumbers() {
  let num5_a = document.getElementById("num5_a").value;
  let num5_b = document.getElementById("num5_b").value;
  let result5 = parseFloat(num5_a ** num5_b);
  document.getElementById("result5").innerHTML = result5;
  return false; // Para evitar que el formulario se envíe y la página se recargue

}
/*++++++++++++++++++++++++++++++++++Practice module +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function modTwoNumbers() {
  let num6_a = document.getElementById("num6_a").value;
  let num6_b = document.getElementById("num6_b").value;
  let result6 = parseFloat(num6_a) % parseFloat(num6_b);
  document.getElementById("result6").innerHTML = result6;
  return false; // Para evitar que el formulario se envíe y la página se recargue
}

/*++++++++++++++++++++++++++++++++++Practice Average  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function promTwoNumbers() {
  let num7_a = document.getElementById("num7_a").value;
  let num7_b = document.getElementById("num7_b").value;
  let result7 = (parseFloat(num7_a) + parseFloat(num7_b)) / 2;
  document.getElementById("result7").innerHTML = result7;
  return false; // Para evitar que el formulario se envíe y la página se recargue
}

/*++++++++++++++++++++++++++++++++++Practice Average  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function incDecTwoNumbers() {
  let num8_a = parseFloat(document.getElementById("num8_a").value);
  let num8_b = parseFloat(document.getElementById("num8_b").value);
  
  num8_a++;
  num8_b--;
  
  document.getElementById("result8").innerHTML = num8_a + ", " + num8_b;
  
  return false; // Para evitar que el formulario se envíe y la página se recargue
}
