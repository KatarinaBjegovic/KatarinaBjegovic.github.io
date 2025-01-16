// DrawRectangle.js 
function main() {
// Retrieve the <canvas> element
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element ');
        return false;
    }
// Get the rendering context for 2DCG 
    var ctx = canvas.getContext('2d');
// make background
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

function resetCanvas(){
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);  //??
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill with black

}

function angleBetween(v1, v2){
    var d = Vector3.dot(v1, v2); 
    var mag1 = v1.magnitude();
    var mag2 = v2.magnitude();
    var cos_ang = d / (mag1 * mag2);
    return Math.acos(cos_ang);
}

function areaTriangle(v1, v2){
    var cross = (v1.elements[0]*v2.elements[1]) - (v1.elements[1]*v2.elements[0] );
    if (cross/2 < 0){
        return -1 * (cross/2);
    }
    return cross/2;
}

// part 2: draw red vector:
function drawVector(v, color){

    var canvas = document.getElementById('example');


    var ctx = canvas.getContext('2d');


    var x = v.elements[0] * 20;
    var y = v.elements[1] * 20;

    ctx.translate(canvas.width / 2, canvas.height / 2); //!!

    ctx.beginPath();
    ctx.moveTo(0, 0);

    ctx.lineTo(x, -y);  // ??
    ctx.strokeStyle = color;
    ctx.stroke();

    ctx.setTransform(1, 0, 0, 1, 0, 0); //??
} 

function handleDrawEvent(){
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    resetCanvas();

    // Get the vector components from input fields
    var v1_x = parseFloat(document.getElementById("v1_x").value); // v1 inputs
    var v1_y = parseFloat(document.getElementById("v1_y").value);

    var v2_x = parseFloat(document.getElementById("v2_x").value); // v2 inputs
    var v2_y = parseFloat(document.getElementById("v2_y").value);

    if (isNaN(v1_x) || isNaN(v1_y) || isNaN(v2_x) || isNaN(v2_y) ) {
        alert("Not valid input. Please enter intergers only");
        return;
    }

    var v1 = new Vector3([v1_x, v1_y, 0]);  
    var v2 = new Vector3([v2_x, v2_y, 0]); 

    

    drawVector(v1, "red");
    drawVector(v2, "blue");
}

function handleDrawOperationEvent(){
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    resetCanvas();

    var v1_x = parseFloat(document.getElementById("v1_x").value); // v1 inputs
    var v1_y = parseFloat(document.getElementById("v1_y").value);

    var v2_x = parseFloat(document.getElementById("v2_x").value); // v2 inputs
    var v2_y = parseFloat(document.getElementById("v2_y").value);

    if (isNaN(v1_x) || isNaN(v1_y) || isNaN(v2_x) || isNaN(v2_y) ) {
        alert("Not valid input. Please enter intergers only");
        return;
    }

    var v1 = new Vector3([v1_x, v1_y, 0]);  
    var v2 = new Vector3([v2_x, v2_y, 0]); 

    drawVector(v1, "red");
    drawVector(v2, "blue");

    var op = parseFloat(document.getElementById("op").value); 
    if (op == "add") {
        v1.add(v2);
        drawVector(v1, "green");
    } else if (op == "sub") {
        v1.sub(v2);
        drawVector(v1, "green");
    } else if (op == "mul") {
        var scalar = parseFloat(document.getElementById("scalar").value); 
        v1.mul(scalar);
        drawVector(v1, "green");
        v2.mul(scalar);
        drawVector(v2, "green");
    } else if (op == "div") {
        var scalar = parseFloat(document.getElementById("scalar").value); 
        v1.div(scalar);
        drawVector(v1, "green");
        v2.div(scalar);
        drawVector(v2, "green");
    } else if (op == "norm") {
        v1.normalize();
        drawVector(v1, "green");
        v2.normalize();
        drawVector(v2, "green");
    } else if (op == "mag") {
        var mag1 = v1.magnitude();
        console.log("Magnitude of v1: " + mag1);
        var mag2 = v2.magnitude();
        console.log("Magnitude of v2: " + mag2);
    } else if (op == "angle") {
        console.log("Angle: " + angleBetween(v1,v2));
    } else if (op == "area") {
        console.log("Area of the Triangle: " + areaTriangle(v1,v2));
    }
}