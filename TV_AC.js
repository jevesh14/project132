imag = "";

function preload(){
   imag = loadImage("tv.jpeg");
}

function draw(){
    image(imag,0,0,360,360);
}
function setup(){
     canvas = createCanvas(360,360);
     canvas.center();

     ImageDetector = ml5.objectDetector('cocossd', modelLoaded);

}
function modelLoaded(){
   console.log("Model Loaded");
   statu = true;
   ImageDetector.detect(imag,gotresults);
}
function gotresults(error,results){
   if(error){
      console.log(error);
   }
   else
   {
      console.log(results);
   }
}