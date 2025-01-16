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

// part 3: webpage interface vertex 1
function handleDrawEvent(){
   
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


// part 4: web interface vertex 2





// part 5: webpage interface math



// part 6: webpage interface to visualize results magnitude


// part 7: webpage interface to visualize results angle

// part 8: webpage interface to visualize results area


//part 9: test...
