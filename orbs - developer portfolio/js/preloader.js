window.onload = function() {preloader()};

//Preloader
var myVar;
var type;

function preloader() {
    myVar = setTimeout(showPage, 1500);
    type = setTimeout(typeWriter, 2500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var i = 0;
var txt = 'I am a Front End Developer';
var speed = 150;

function typeWriter() {
	if (i < txt.length) {
	  document.getElementById("typer").innerHTML += txt.charAt(i);
	  i++;
	  setTimeout(typeWriter, speed);
	}
}