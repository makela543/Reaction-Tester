var start = new Date().getTime();

function createShape() {
    
    var positionTopRandom = Math.random() * 400;
    
    var positionLeftRandom = Math.random() * 400;
    
    var widthRandom = Math.random() * 300 + 50;
    
    document.getElementById("shape").style.top = positionTopRandom + "px";
    
    document.getElementById("shape").style.left = positionLeftRandom + "px";
    
    document.getElementById("shape").style.width = widthRandom + "px";
    
    document.getElementById("shape").style.height = widthRandom + "px";
    
    document.getElementById("shape").style.display = "block";
    
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
    
    appearAfterDelay();
    
}