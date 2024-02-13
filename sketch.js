var sprite;
var img;
var anim;

function preload() {
    // img = loadImage('tile000.png');
    anim = loadAnimation(
        'walk1.png',
        'walk2.png',
        'walk3.png',
        'walk4.png'
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
