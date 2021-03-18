var database;

var form;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("Images/bckground.jpg");
}

function setup(){
  createCanvas(displayWidth-40,displayHeight-150);
  
  database = firebase.database();

  form = new Form();
}

function draw(){
  background(backgroundImg);
  form.display();
}