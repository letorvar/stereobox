var r, g, b = 0;
var boardSize = 1000;
var amountOfRectsInRow = 4;
var rectSize = boardSize / amountOfRectsInRow;
var margin = rectSize;
var canvasWidth = 2000 + margin;
var canvasHeight = canvasWidth / 2;
var amountOfColors = 2;
var randColor;
var rRange = 10;
var gRange = 10;
var bRange = 255;
var numberOfColors = 3;
var availableColors;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // availableColors = drawColors(numberOfColors);
    availableColors = [
        { r: 230, g: 5, b: 2 },
        { r: 8, g: 240, b: 6 },
        { r: 3, g: 10, b: 220 }
    ];
    noLoop();
}

function draw() {
    var index = 0;
    for (var x = 0; x < amountOfRectsInRow; x++) {
        for (var y = 0; y < amountOfRectsInRow; y++) {
            // randColor = drawColor(rRange, gRange, bRange);
            index = floor(random(numberOfColors)); // losuje jeden z indeksów 
            randColor = availableColors[index]; //losuje jeden z kolorów z tabilcy 

            fill(randColor.r, randColor.g, randColor.b);
            rect(x * rectSize, y * rectSize, rectSize, rectSize);
            rect(x * rectSize + boardSize + margin, y * rectSize, rectSize, rectSize);
        }
    }
    randomCoordinates = drawCoordinate();
    index = floor(random(numberOfColors));
    randColor = availableColors[index]; //FIXME: poprawić losowany kolor żeby nie pokrywał się z aktualnym
    fill(randColor.r, randColor.g, randColor.b);
    rect(randomCoordinates.x * rectSize, randomCoordinates.y * rectSize, rectSize, rectSize); //2 pierwsze parametry funkcji to współrzędne a dwa pozostałe to rysowana wielkość  


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