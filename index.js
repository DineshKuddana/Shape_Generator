function generateShape() {
    const shapeSelect = document.getElementById("shape");
    const shape = shapeSelect.value;
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;

    if (!x || !y) {
        alert("Please provide values for X-axis and Y-axis");
        return;
    }

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    // Color for shape
    var randomColor = getRandomColor();
    context.fillStyle = randomColor;

    if (shape === "circle") {
        const radius = document.getElementById("radius").value;

        if (!radius) {
            alert("Please provide a value for Radius");
            return;
        }

        const centerX = x;
        const centerY = y;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    } else if (shape === "rectangle") {
        const w = document.getElementById("w").value;
        const h = document.getElementById("h").value;

        if (!w || !h) {
            alert("Please provide values for Width and Height");
            return;
        }

        context.fillRect(x, y, w, h);
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const shapeSelect = document.getElementById("shape");
shapeSelect.addEventListener("change", function () {
    const circleInputs = document.getElementById("circleInputs");
    const rectangleInputs = document.getElementById("rectangleInputs");

    if (shapeSelect.value === "circle") {
        circleInputs.style.display = "block";
        rectangleInputs.style.display = "none";
    } else if (shapeSelect.value === "rectangle") {
        circleInputs.style.display = "none";
        rectangleInputs.style.display = "block";
    }
});

const generateBtn = document.getElementById("btn");
generateBtn.addEventListener("click", generateShape);