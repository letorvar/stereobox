var r, g, b = 0;
var boardSize = 1000;
var amountOfRectsInRow = 4;
var rectSize = boardSize / amountOfRectsInRow;
var margin = rectSize;
var canvasWidth = 2000 + margin;
var canvasHeight = canvasWidth / 2;
var amountOfColors = 2;
var randColor;
var rRange = 255;
var gRange = 255;
var bRange = 255;
var numberOfColors = 3;
var availableColors;

var rects = [];
var twinRects = [];
function RandomColor() {
    var indexOfColor = floor(random(numberOfColors));
    var randColor = availableColors[indexOfColor];
    this.r = randColor.r;
    this.g = randColor.g;
    this.b = randColor.b;
}


function mousePressed() {
    for (var i = 0; i < rects.length; i++) {
        rects[i].clicked();

        // twinRects[i])
    }
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    availableColors = drawColors(numberOfColors);
    for (var x = 0; x < amountOfRectsInRow; x++) {
        for (var y = 0; y < amountOfRectsInRow; y++) {
            let rectColor = new RandomColor();
            rects.push(new ColorfulRect(x, y, rectColor));
            twinRects.push(new ColorfulRect(x, y, rectColor));
        }
    }

    // availableColors = [
    //     { r: 230, g: 5, b: 2 },
    //     { r: 8, g: 240, b: 6 },
    //     { r: 3, g: 10, b: 220 }
    // ];
    // noLoop();
}

function draw() {
    for (var i = 0; i < rects.length; i++) {
        rects[i].drawYourself(0, 0);
        twinRects[i].drawYourself(boardSize + margin, 0);
    }
}

function drawCoordinate() {
    var randX = floor(random(amountOfRectsInRow - 1));
    var randY = floor(random(amountOfRectsInRow - 1));

    return { x: randX, y: randY };
}


function drawColor(rRange, gRange, bRange) {
    var randRed = random(rRange);
    var randGreen = random(gRange);
    var randBlue = random(bRange);

    var drawnColor = {
        r: randRed,
        g: randGreen,
        b: randBlue
    };
    return drawnColor;
}

function drawColors(numberOfColors) {
    var drawnColors = [];
    var drawnColor = {};
    for (var i = 1; i <= numberOfColors; i++) {
        drawnColor = drawColor(rRange, gRange, bRange);
        drawnColors.push(drawnColor);
    }

    return drawnColors;

}