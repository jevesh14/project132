imge = "";

function preload() {
    imge = loadImage("hall.jpeg");
}

function draw() {
    image(imge, 0, 0, 360, 360);
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