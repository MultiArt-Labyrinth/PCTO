class Muro{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.muro = false;      //se è vero sarà un muro, l'omino non può passare
  }
  
  show(){
    if(this.muro === true) {   //se il muro è vero 
      fill(0, 51, 153);       //colore muro
      rect(this.x, this.y, DIM, DIM); //crea rettangolo (muro gestito a celle)
    }
  }
}