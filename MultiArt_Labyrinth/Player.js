class Player{

  //COSTRUTTORE
  constructor(){
    this.dim = 60;
    //posizione player
    this.x = labirinto[1][2].x;
    this.y = labirinto[1][2].y;
  }

  //funzione che permette di mostrare a video l'immagine dell'omino
  show(){
    image(player_image, this.x, this.y);
  }

  //funzione che detta i movimenti dello sprite
  move(){
    if(mousePressed){
      mouseDragged();
    }else{
      mouseReleased();
    }
  }
}