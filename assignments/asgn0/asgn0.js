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
// Draw a blue rectangle
    ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set a blue color 
    ctx.fillRect(120, 10, 150, 150); // Fill a rectangle with the color
    //create ector here
    v1 = new Vector3([2, 3, 0])
    drawVector(v1, "red")
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
 

// part 4: web interface vertex 2


// part 5: webpage interface math



// part 6: webpage interface to visualize results magnitude


// part 7: webpage interface to visualize results angle

// part 8: webpage interface to visualize results area


//part 9: test...
