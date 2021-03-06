var start = new Date().getTime();

var highScore = Infinity;

function randomizeColor() {
    
    var randomNumber = Math.floor(Math.random() * 6);
    
    var shapeColor = "";
    
    switch(randomNumber) {
            
        case 0:
            shapeColor = "blue";
            break;
        case 1:
            shapeColor = "red";
            break;
        case 2:
            shapeColor = "yellow";
            break;
        case 3:
            shapeColor = "green";
            break;
        case 4:
            shapeColor = "pink";
            break;
        case 5:
            shapeColor = "orange";
            
    }
    document.getElementById("shape").style.backgroundColor = shapeColor;
    
}

function randomizePosition() {
    
    var positionTopRandom = Math.random() * 400;
    
    var positionLeftRandom = Math.random() * 400;
    
    document.getElementById("shape").style.top = positionTopRandom + "px";
    
    document.getElementById("shape").style.left = positionLeftRandom + "px";
    
}

function randomizeSize() {
   
    var widthRandom = Math.random() * 300 + 50;
    
    document.getElementById("shape").style.width = widthRandom + "px";
    
    document.getElementById("shape").style.height = widthRandom + "px";   
    
}

function randomizeShape() {
    
    var randomNumber = Math.floor(Math.random() * 2)
    
    if(randomNumber == 0) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0%";
    }
    
}

function createShape() {
    
    document.getElementById("shape").style.display = "block";
    
    randomizePosition();
    
    randomizeSize();
    
    randomizeColor();
    
    randomizeShape();
    
    start = new Date().getTime();
    
}

function appearAfterDelay() {
    
    setTimeout(createShape, Math.random() * 2500);
    
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {
    
    document.getElementById("shape").style.display = "none";
    
    var end = new Date().getTime();
    
    var timeTaken = (end - start) / 1000;
    
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    
    if(timeTaken < highScore) {
        highScore = timeTaken;
        document.getElementById("highScore").innerHTML = highScore + "s";
    }
    
    appearAfterDelay();
    
}