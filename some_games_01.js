function sketchProc(processing) {
 
    var y = 100;
    var count = 0;
    var move = 0;

    processing.setup = function() {
        processing.size(innerWidth,innerHeight);
        processing.frameRate(30);
    }
 
    processing.draw = function() {
        /*
        // サイズチェック
        processing.background(0);
        processing.noFill();
        processing.strokeWeight(1);
        processing.stroke(255);
        for(var i=0;i<10;i++){
            processing.rect(0+innerWidth*i/20,0+innerHeight*i/20,innerWidth*(10-i)/10,innerHeight*(10-i)/10);
        }
        */

        processing.background(0);
        processing.noFill();
        processing.strokeWeight(1);
        if(move==1){
            processing.strokeWeight(3);
        }
        processing.stroke(255);
        processing.ellipse(processing.mouseX,processing.mouseY,30,30);

        if(move){
            count++;
            processing.fill(255);
            processing.textSize(30);
            processing.text(count,100,100);
        }

    }

    processing.mousePressed = function(){
        move = 1;
    }

    processing.mouseReleased = function(){
        move = 0;
        count = 0;
    }
 
}
 
var canvas = document.getElementById("app");
var p = new Processing(canvas, sketchProc);
