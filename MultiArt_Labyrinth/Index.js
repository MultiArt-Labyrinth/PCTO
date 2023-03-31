//oggetti
let player;
let labirinto = [];

//immagini
let player_image;
let player_create_gif;
let pagina_iniziale;

let righe;
let colonne;                   //'DIM' è la dimensione delle celle
let obj_premuto = false;
let DIM;
let offX, offY;
let r, c;

//numero della scena
let scena = 0;

//////////////////////////////////////////////////////////////////////////////////////////////////// PRELOAD ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function preload() {
  //loadImage serve per caricare un immagine
  player_image = loadImage('image_player.png');
  pagina_iniziale = loadImage('pagina_iniziale.png');
  //player_create_gif = createImg('gif_player.gif');
}

//////////////////////////////////////////////////////////////////////////////////////////////////// SETUP ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);

  //elimina i bordi
  noStroke(); 

  //dichiarazione righe e colonne
  righe = 23;
  colonne = 25;
  DIM = min(floor(windowWidth / colonne), floor(windowHeight / righe));

  //creazione degli oggetti

  for(let i = 0; i < righe; i++){
    labirinto[i] = [];  //matrice (come costruzione arrayMulti di java)
    for(let j = 0; j < colonne; j++) {
      labirinto[i][j] = new Muro(DIM*j, DIM*i);
    }
  }
  

  player = new Player();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  DIM = min(floor(windowWidth / colonne), floor(windowHeight / righe));
}

//////////////////////////////////////////////////////////////////////////////////////////////////// DRAW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  //per settare lo sfondo
  background(220);  

  for(let i = 0; i < righe; i++) {
    for(let j = 0; j < colonne; j++) {
      //funzioni del labirinto
      labirinto[i][j].show();
      stroke(255, 0, 0);
    }
  }

  if (collisione()) {
    let r = floor(player.y / DIM); 
    let c = floor(player.x / DIM);

    if (player.x < DIM) {
      mouseReleased();
      console.log("collisione a sinistra");
      player.x = labirinto[r][c+1].x;
    }
    if (player.x > DIM) {
      mouseReleased();
      console.log("collisione a destra");
      player.x = player.x - player.dim;
      player.x = labirinto[r][c-1].x;
    }
    if (player.y < DIM) {
      mouseReleased();
      console.log("collisione sopra");
      player.y = player.y - player.dim;
      player.y = labirinto[r+1][c].x;
    } 
    if (player.y > DIM) {
      mouseReleased();
      console.log("collisione sotto");
      player.y = player.y + player.dim;
      player.y = labirinto[r-1][c].x;
    }
  }
  //funzione per cambiare le schermate
  funzione = "screen" + (scena + 1);
  window[funzione]();

  fill(255, 0, 0);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);  //visualizzo le coordinate
}

//////////////////////////////////////////////////////////////////////////////////////////////////// MOVIMENTO ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mousePressed(){
  if(mouseIsPressed){
    //se quando viene premuto la schermata è 0
    if(scena == 0){
      //cambia la schermata nella schermata 1 (quella del gioco)
      scena = 1;
    }
    //se quando viene premuto la schermata è 2 (quella della fine)
    if(scena == 2){
      //cambia la schermata nella schermata 0 (quella di inizio)
      scena = 0;
    }
  }

  if (mouseX > player.x && mouseX < player.x + player.dim && mouseY > player.y && mouseY < player.y + player.dim){         //PER HITBOX
    offX = mouseX - player.x;
    offY = mouseY - player.y;
    this.obj_premuto = true;
  }
}

function mouseDragged() {
  if (this.obj_premuto) {
    player.x = mouseX - offX;
    player.y = mouseY - offY;
  }
}

function mouseReleased() {
  this.obj_premuto = false;
}

function collisione(){
  let r = floor(player.y / DIM); 
  let c = floor(player.x / DIM);
  return labirinto[r][c].muro === true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////// SCREEN ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function screen1(){
  background(pagina_iniziale);
}

//LIVELLO 1
//la prima schermata che appare all'inizio del programma

function screen2(){                          
  background(220);
  player.show();
  player.move();

  //crea tutta la griglia sotto (mette i muri)

  let r = 23;
  let c = 25;
  
  for(let i = 0; i < c; i++) {  //mette i muri a tutta la prima riga e l'ultima
    if(i >= 4){
      labirinto[0][i].muro = true;
    }
    labirinto[r-1][i].muro = true;
    labirinto[0][i].show();
    labirinto[r-1][i].show();
  }
  for(let i = 0; i < r; i++) {   //mette i muri a tutta la prima colonna e l'ultima
    labirinto[i][0].muro = true;
    if(i <= (r - 7) || i >= (r - 3)){
      labirinto[i][c-1].muro = true;
    }
    labirinto[i][0].show();
    labirinto[i][c-1].show();
  }

  //creazione labirinto
  
  //RIGA 1
  labirinto[1][4].muro = true;
  labirinto[1][4].show();
  
  //RIGA 2
  labirinto[2][4].muro = true;    
  labirinto[2][4].show(); 

  //RIGA 3
  labirinto[3][4].muro = true;    
  labirinto[3][4].show(); 

  //RIGA 4
  labirinto[4][4].muro = true;    
  labirinto[4][4].show(); 
  labirinto[4][8].muro = true;    
  labirinto[4][8].show();
  labirinto[4][9].muro = true;    
  labirinto[4][9].show();
  labirinto[4][10].muro = true;   
  labirinto[4][10].show();
  labirinto[4][11].muro = true;   
  labirinto[4][11].show();
  labirinto[4][12].muro = true;   
  labirinto[4][12].show();
  labirinto[4][13].muro = true;   
  labirinto[4][13].show();
  labirinto[4][14].muro = true;   
  labirinto[4][14].show();
  labirinto[4][15].muro = true;   
  labirinto[4][15].show();
  labirinto[4][16].muro = true;   
  labirinto[4][16].show();
  labirinto[4][20].muro = true;   
  labirinto[4][20].show();

  //RIGA 5
  labirinto[5][4].muro = true;    
  labirinto[5][4].show(); 
  labirinto[5][12].muro = true;   
  labirinto[5][12].show();
  labirinto[5][20].muro = true;   
  labirinto[5][20].show();
 
  //RIGA 6
  labirinto[6][4].muro = true;    
  labirinto[6][4].show(); 
  labirinto[6][12].muro = true;   
  labirinto[6][12].show(); 
  labirinto[6][20].muro = true;   
  labirinto[6][20].show(); 

  //RIGA 7
  labirinto[7][4].muro = true;    
  labirinto[7][4].show();
  labirinto[7][12].muro = true;   
  labirinto[7][12].show(); 
  labirinto[7][20].muro = true;   
  labirinto[7][20].show();

  //RIGA 8
  labirinto[8][4].muro = true;    
  labirinto[8][4].show();
  labirinto[8][5].muro = true;    
  labirinto[8][5].show();
  labirinto[8][6].muro = true;    
  labirinto[8][6].show();
  labirinto[8][7].muro = true;    
  labirinto[8][7].show();
  labirinto[8][8].muro = true;    
  labirinto[8][8].show();
  labirinto[8][12].muro = true;   
  labirinto[8][12].show();
  labirinto[8][16].muro = true;   
  labirinto[8][16].show();
  labirinto[8][17].muro = true;   
  labirinto[8][17].show();
  labirinto[8][18].muro = true;   
  labirinto[8][18].show();
  labirinto[8][19].muro = true;   
  labirinto[8][19].show();
  labirinto[8][20].muro = true;   
  labirinto[8][20].show();
  labirinto[8][21].muro = true;   
  labirinto[8][21].show();
  labirinto[8][22].muro = true;   
  labirinto[8][22].show();
  labirinto[8][23].muro = true;   
  labirinto[8][23].show();

  //RIGA 9
  labirinto[9][4].muro = true;    
  labirinto[9][4].show();
  labirinto[9][12].muro = true;   
  labirinto[9][12].show();

  //RIGA 10
  labirinto[10][4].muro = true;   
  labirinto[10][4].show(); 
  labirinto[10][12].muro = true;  
  labirinto[10][12].show();  
  
  //RIGA 11
  labirinto[11][4].muro = true;   
  labirinto[11][4].show();
  labirinto[11][12].muro = true;  
  labirinto[11][12].show();

  //RIGA 12
  labirinto[12][4].muro = true;   
  labirinto[12][4].show();
  labirinto[12][8].muro = true;   
  labirinto[12][8].show();
  labirinto[12][9].muro = true;   
  labirinto[12][9].show();
  labirinto[12][10].muro = true;  
  labirinto[12][10].show();
  labirinto[12][11].muro = true;  
  labirinto[12][11].show();
  labirinto[12][12].muro = true;  
  labirinto[12][12].show();
  labirinto[12][13].muro = true;  
  labirinto[12][13].show();
  labirinto[12][14].muro = true;  
  labirinto[12][14].show();
  labirinto[12][15].muro = true;  
  labirinto[12][15].show();
  labirinto[12][16].muro = true;  
  labirinto[12][16].show();
  labirinto[12][17].muro = true;  
  labirinto[12][17].show();
  labirinto[12][18].muro = true;  
  labirinto[12][18].show();
  labirinto[12][19].muro = true;  
  labirinto[12][19].show();
  labirinto[12][20].muro = true;  
  labirinto[12][20].show();

  //RIGA 13
  labirinto[13][4].muro = true;   
  labirinto[13][4].show();
  labirinto[13][8].muro = true;   
  labirinto[13][8].show();

  //RIGA 14
  labirinto[14][4].muro = true;   
  labirinto[14][4].show();
  labirinto[14][8].muro = true;   
  labirinto[14][8].show();

  //RIGA 15
  labirinto[15][4].muro = true;   
  labirinto[15][4].show();
  labirinto[15][8].muro = true;   
  labirinto[15][8].show();

  //RIGA 16
  labirinto[16][4].muro = true;   
  labirinto[16][4].show();
  labirinto[16][8].muro = true;   
  labirinto[16][8].show();
  labirinto[16][12].muro = true;  
  labirinto[16][12].show();
  labirinto[16][13].muro = true;  
  labirinto[16][13].show();
  labirinto[16][14].muro = true;  
  labirinto[16][14].show();
  labirinto[16][15].muro = true;  
  labirinto[16][15].show();
  labirinto[16][16].muro = true;  
  labirinto[16][16].show();
  labirinto[16][17].muro = true;  
  labirinto[16][17].show();
  labirinto[16][18].muro = true;  
  labirinto[16][18].show();
  labirinto[16][19].muro = true;  
  labirinto[16][19].show();
  labirinto[16][20].muro = true;  
  labirinto[16][20].show();
  labirinto[16][21].muro = true;  
  labirinto[16][21].show();
  labirinto[16][22].muro = true;  
  labirinto[16][22].show();
  labirinto[16][23].muro = true;  
  labirinto[16][23].show();

  //RIGA 17
  labirinto[17][8].muro = true;   
  labirinto[17][8].show();
  labirinto[17][4].muro = true;   
  labirinto[17][4].show();
  labirinto[17][12].muro = true;  
  labirinto[17][12].show();
  labirinto[17][20].muro = true;  
  labirinto[17][20].show();
  
  //RIGA 18
  labirinto[18][8].muro = true;   
  labirinto[18][8].show();
  labirinto[18][4].muro = true;   
  labirinto[18][4].show();
  labirinto[18][12].muro = true;  
  labirinto[18][12].show();
  labirinto[18][20].muro = true;  
  labirinto[18][20].show();

  //RIGA 19
  labirinto[19][8].muro = true;   
  labirinto[19][8].show();

  //RIGA 20
  labirinto[20][8].muro = true;   
  labirinto[20][8].show();
  labirinto[20][16].muro = true;  
  labirinto[20][16].show();

  //RIGA 21
  labirinto[21][8].muro = true;   
  labirinto[21][8].show();
  labirinto[21][16].muro = true;  
  labirinto[21][16].show();

}


//LIVELLO 2

function screen3(){                          
  background(220);
  player.show();
  player.move();

  //crea tutta la griglia sotto (mette i muri)

  //contorno labirinto

  for(let i = 0; i < colonne; i++) {  //mette i muri a tutta la prima riga e l'ultima
    if(i >= 4){
      labirinto[0][i].muro = true;
    }
    labirinto[righe-1][i].muro = true;
    labirinto[0][i].show();
    labirinto[righe-1][i].show();
  }
  for(let i = 0; i < righe; i++) {   //mette i muri a tutta la prima colonna e l'ultima
    labirinto[i][0].muro = true;
    if(i <= (righe - 7) || i >= (righe - 3)){
      labirinto[i][colonne-1].muro = true;
    }
    labirinto[i][0].show();
    labirinto[i][colonne-1].show();
  }

  //creazione labirinto
  
  labirinto[1][4].muro = true;    
  labirinto[1][4].show();
}