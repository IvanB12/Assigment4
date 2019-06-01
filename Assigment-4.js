var canv = document.getElementById('canvas');

var a = function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
}

canv.addEventListener("click", a);



var valueColor = "black";

function PaintBrush(value) {
    if (value === 1) {
        valueColor = "black";
    } else if (value === 2) {
        valueColor = "red";
    } else if (value === 3) {
        valueColor = "green";
    } else if (value === 4) {
        valueColor = "blue";
    } else if (value === 5) {
        valueColor = "white";
    }
}

function GetClick(a) {
    var pix = document.createElement("div");
    canv.appendChild(pix);
    pix.style.backgroundColor = valueColor;
    pix.style.width = "10px";
    pix.style.height = "10px";
    pix.style.position = "absolute";
    pix.style.borderRadius = "50%";
    pix.style.top = a.pageY - a.target.offsetTop + "px";
    pix.style.left = a.pageX - a.target.offsetLeft + "px";
}
canv.addEventListener("mousemove", GetClick);