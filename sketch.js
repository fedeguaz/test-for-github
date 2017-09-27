function setup() {
  createCanvas(800,600);
  background(200,200,200); //se metto qui lo sfondo mi viene il giochino dei cerchi che si ridisegnano anche con lo sfondo, perché non mi copre ogni volta, non si ridisegna lo sfondo.
  //setup runs only once while draw runs forever
}

function draw() {
 //background(R,G,B,opacity); P5 ridisegna il contenuto circa 60 volte al secondo, per questo quando hai opacità bassa sembra fadeIn, smbra scurirsi dopo il play
  //background(200,200,200)
  //set the color model in HSB colorMode(HSB);
  //strokeWeight (num); per modificare lo spessore della linea
  //strokeWeight(6);
  //stroke(R,G,B,opacity); colori della scala RGB -> per far si che le varie forme abbiano caratteristiche diverse, riscrivo l'istruzione prima dell'oggetto, perché applica con ereditarietà.
  //stroke (H,S,B,opacity); stroke("#codicecolore");
  //stroke(255,0,0);
  //noStroke(); rende invisibile la linea
  //nofill(); toglie riempimento (a questo punto metto una linea se no non si vede nulla)
  //fill(R,G,B,opacity); per deffinire colore di riempimento e opacità
  //fill(255,100,0);
  //line (x,y,x2,y2)
  //line(200,200,400,400);
  
  //set the color model in RGB colorMode(RGB)
  colorMode(RGB);
  //stroke(255,0,0);
  //strokeWeight(8);
  //fill(255,100,0);
  //rect(x1,x2,width,high)
  //rect(50,50,300,150);
  
  //arancio più indietro rispetto agli altri
  //fill(255,100,0);
  //noStroke();
  //rect(50,50,200,300);
  
  //rosso a metà
  //fill(255,50,0);
  //noStroke();
  //rect(100,100,400,200);
  
  //viola più avanti di tutti
  //fill(255,0,100);
  //noStroke();
  //rect(200,200,500,100);
  
  //stroke(255,0,0,50);
  //strokeWeight(4);
  //fill(255,100,0);
  //ellipse(centre,centre,width,height) se uso ellipse(width/2,height/2, width, high) sto posizionando l'ellisse al centro della tavola; ellipse (width*0,25,...); ellipse((width/4)*3, height*0.75...);
  //ellipse(width/2,height/2,150,100)
  
  //ellipse(mouseX,mouseY, dimensioni) mi segue la posizione del mouse
  //ellipse(mouseX,mouseY,50,50);
  
  //line(pmouseX,pmouseY,mouseX,mouseY) mi prende la posizione precedente del mouse e quella attuale
  line(pmouseX,pmouseY,mouseX,mouseY);
  
}