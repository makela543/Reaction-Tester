var start = new Date().getTime();

function createShape() {
    
    document.getElementById("shape").style.display = "block";
    
    start = new Date().getTime();
}

document.getElementById("shape").onclick = function() {
    
    document.getElementById("shape").style.display = "none";
    
    var end = new Date().getTime();
    
    var timeTaken = (end - start) / 1000;
    
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    
    setTimeout(createShape, Math.random() * 2500);
    
}