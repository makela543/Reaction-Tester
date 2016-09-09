var start = new Date().getTime();

function createShape() {
    
    var positionTopRandom = Math.random() * 400;
    
    document.getElementById("shape").style.top = positionTopRandom + "px";
    
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