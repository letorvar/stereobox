function ColorfulRect(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;

    this.drawYourself = function (offsetX, offsetY) {
        if (mouseX >= this.x * rectSize && mouseX < this.x * rectSize + rectSize &&
            mouseY >= this.y * rectSize && mouseY <this.y * rectSize + rectSize
        ){ 
           fill(this.color.r, this.color.g, this.color.b);
           strokeWeight(10);
           stroke(0);
        } else{
            fill(this.color.r, this.color.g, this.color.b);
            strokeWeight(1);
        }
        rect(this.x * rectSize + offsetX, this.y * rectSize + offsetY, rectSize, rectSize);
    }
    this.clicked = function (mouseX, mouseY) {
        // console.log(this.x + " " + this.y);
        if (mouseX >= this.x * rectSize && mouseX < this.x * rectSize + rectSize &&
            mouseY >= this.y * rectSize && mouseY <this.y * rectSize + rectSize
        ){ 
            this.color = new RandomColor(); 
        }
    }
    this.mouseOver = function (mouseX, mouseY) {
        if (mouseX >= this.x * rectSize && mouseX < this.x * rectSize + rectSize &&
            mouseY >= this.y * rectSize && mouseY <this.y * rectSize + rectSize
        ){     
        fill(this.color.r, this.color.g, this.color.b, 5);
        rect(this.x * rectSize, this.y * rectSize, rectSize, rectSize);
        }
    }
}
