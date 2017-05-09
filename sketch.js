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
function RandomColor(){
    var index = floor(random(numberOfColors));
    var randColor = availableColors[index];
    this.r = randColor.r;
    this.g = randColor.g;
    this.b = randColor.b;
}
function ColorfulRect(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color; 


    this.draw = function(){
        fill(this.color.r, this.color.g, this.color.b);
        rect(this.x * rectSize, this.y * rectSize, rectSize, rectSize);    
    }
}
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    availableColors = drawColors(numberOfColors);
    for (var x = 0; x < amountOfRectsInRow; x++) {
        for (var y = 0; y < amountOfRectsInRow; y++) {
            rects.push(new ColorfulRect(x,y,new RandomColor()));
        }
    }
    
    // availableColors = [
    //     { r: 230, g: 5, b: 2 },
    //     { r: 8, g: 240, b: 6 },
    //     { r: 3, g: 10, b: 220 }
    // ];
    noLoop();
}

function draw() {
    for (var i = 0; i < rects.length; i++){
        rects[i].draw();
    }
    // var index = 0;
    // var randomCoordinates = drawCoordinate();
    // for (var x = 0; x < amountOfRectsInRow; x++) {
    //     for (var y = 0; y < amountOfRectsInRow; y++) {
    //         // randColor = drawColor(rRange, gRange, bRange);
    //         index = floor(random(numberOfColors)); // losuje jeden z indeksów 
    //         randColor = availableColors[index]; //losuje jeden z kolorów z tabilcy 

    //         fill(randColor.r, randColor.g, randColor.b);
    //         rect(x * rectSize, y * rectSize, rectSize, rectSize);
    //         if (randomCoordinates.x === x && randomCoordinates.y === y) {
    //             index++;
    //             randColor = availableColors[index % numberOfColors];
    //             fill(randColor.r, randColor.g, randColor.b);
    //         }
    //         rect(x * rectSize + boardSize + margin, y * rectSize, rectSize, rectSize);
    //     }
    // }
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