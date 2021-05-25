img = "";

function preload() {
   img = loadImage("bedrroms.jpeg");
}

function draw() {
   image(img, 0, 0, 360, 360);
}

function setup() {
   canvas = createCanvas(360, 360);
   canvas.center();
}

function gotresults(error, results) {
   if (error) {
      console.log(error);
   } else {
      console.log(results);
   }
}