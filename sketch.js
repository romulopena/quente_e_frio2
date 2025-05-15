let x; //criando variavel X
let y; //criando variavel Y

function setup() {
  createCanvas(400, 400);
  x = random(400);   //sorteando numero até 400
  x = int(x);       // transformando p/ numero inteiro
  y = random(400);
  y = int(y);
}

function draw() {
  background("yellow"); //fundo da tela amarelo
  //circle(x, y, 10);    //circulo com coordenadas aleatorias 
  //e diametro 10
    x = x + random(-2, 2);
    y = y + random(-2,2);
    x = constrain(x,0,400);
    y = constrain(y,0,400);
    let distanciaX; //cateto
    let distanciaY; //cateto
    let distancia; //hipotenusa
    distanciaX = mouseX - x; 
    distanciaY = mouseY - y;
    //distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    distancia = dist(mouseX,mouseY,x,y)  //função nativa para calcular distancia
    circle(mouseX,mouseY,distancia);  
  
  dist(mouseX,mouseY,x,y)

   
  if( distancia < 3) {  
    text("Encontrei!", 200, 200);
    noLoop();
  }
   if(distancia > 150){
      fill("blue")
      circle(mouseX,mouseY,distancia);
    }else if(distancia > 100){
      fill("purple");
      circle(mouseX,mouseY,distancia)
    }else if(distancia > 75){
      fill("orange");
      circle(mouseX,mouseY,distancia)
  }else if(distancia > 15){
      fill("red");
      circle(mouseX,mouseY,distancia)
  }
}