document.addEventListener("DOMContentLoaded", function() {
  const parts = document.querySelectorAll(".part-button");

  parts.forEach(part => {
    part.addEventListener("click", function() {
      const canvas = document.getElementById("canvas");
      const image = new Image();

      // Set source of image based on the part clicked
      switch (part.id) {
        case "Rocket Body":
          image.src = "part_images/rocket_body.jpg"; // Path to your image for part 1
          break;
        case "Rocket Engine":
          image.src = "part_images/rocket_engine.jpg";
          break;
        // Add more cases for other parts as needed
        case "Rover Body":
          image.src = "part_images/rover_body.jpg";
          break;
        case "Rover Camera":
          image.src = "part_images/rover_camera.jpg";
          break;
        case "Rover Wheels":
          image.src = "part_images/rover_wheels.jpg";
          break;
        case "Satelite Body":
          image.src = "part_images/satelite_body.jpg";
          break;
        case "Satelite Dish":
          image.src = "part_images/satelite_dish.jpg";
          break;
        case "Satelite Panels":
          image.src = "part_images/satelite_panels.jpg";
          break;
      }
  

            image.classList.add("draggable");
            canvas.appendChild(image);

            makeDraggable(image);
          });
        });

        function makeDraggable(element) {
          let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

          element.onmousedown = dragMouseDown;

          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
          }

          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
          }

          function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
          }
        }
      });


// Get references to the clear button and the canvas
const clearButton = document.getElementById('clearButton');
const canvas = document.getElementById('canvas');

// Add click event listener to the clear button
clearButton.addEventListener('click', () => {
    // Clear the canvas by removing all child elements
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
});