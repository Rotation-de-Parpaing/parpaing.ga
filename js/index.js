window.onload = function () {
  (speed_x = 4),
    (speed_y = 4),
    // Moving direction, starting at'r-b'lower right
    (direction = "r-b"),
    // icon X and Y coordinates, initial 0
  (position_x = 0),
    (position_y = 0),
    // Number of collisions, used to calculate background and text color
    (count = 0);
  image = document.getElementById("parpaing");

  dvd();

  function dvd() {
    // Moving direction
    switch (direction) {
      // Lower right
      case "r-b":
        position_x += speed_x;
        position_y += speed_y;
        break;
      // Upper right
      case "r-t":
        position_x += speed_x;
        position_y -= speed_y;
        break;
      // Lower left
      case "l-b":
        position_x -= speed_x;
        position_y += speed_y;
        break;
      // Upper left
      case "l-t":
        position_x -= speed_x;
        position_y -= speed_y;
        break;
    }
    // Empty the canvas
    // Redraw
    // Bottom
    if (position_y + image.height >= window.innerHeight) {
      direction = direction.replace("b", "t");
      // Collision Number Statistics
      count += 1;
    }
    // Right
    if (position_x + image.width >= window.outerWidth) {
      direction = direction.replace("r", "l");
      count += 1;
    }
    // Left
    if (position_x < 0) {
      direction = direction.replace("l", "r");
      count += 1;
    }
    // Upper
    if (position_y < 0) {
      direction = direction.replace("t", "b");
      count += 1;
    }
    // Text
    image.style.top = position_y + "px";
    image.style.left = position_x + "px";
    // Start animation
    window.requestAnimationFrame(dvd);
  }
};
