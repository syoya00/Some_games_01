function sketchProc(processing) {
 
    var y = 100;
 
    processing.setup = function() {
        processing.size(innerWidth,innerHeight);
        processing.stroke(255);
        processing.frameRate(30);
    }
 
    processing.draw = function() {
        processing.background(0);
        y = y - 1;
        if (y < 0) { 
            y = innerHeight; 
        } 
        processing.line(0, y, innerWidth, y);  
    }
 
}
 
var canvas = document.getElementById("app");
var p = new Processing(canvas, sketchProc);
