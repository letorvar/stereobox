function ColorfulRect(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;

    this.drawYourself = function (offsetX, offsetY) {
        fill(this.color.r, this.color.g, this.color.b);
        rect(this.x * rectSize + offsetX, this.y * rectSize + offsetY, rectSize, rectSize);
    }
    this.clicked = function () {
        this.color = new RandomColor();

    }
}