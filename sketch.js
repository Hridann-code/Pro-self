var maze;
var man;


function preload(){
  maze=loadImage("Maze.jpg")

}


function setup() {
  createCanvas(1000,600);
  man=createSprite(400, 200, 50, 50);
  man.addAnimation("man.png","man (1).png","man (2).png","man (3).png","man (4).png","man (5).png")
  man.shapeColor="red"
}

function draw() {
  background(maze);  
  drawSprites();
}