var sprite;
var img;
var anim;

function preload() {
    // img = loadImage('tile000.png');
    anim = loadAnimation(
        'assets/tiles/walk1.png',
        'assets/tiles/walk2.png',
        'assets/tiles/walk3.png',
        'assets/tiles/walk4.png'
    );
    anim.frameDelay = 15;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    // image(img, 200, 200);
    animation(anim, 250, 80);
}
