class Marker {

  constructor(_x, _y, _radius, _color) {
    this.x = _x;
    this.y = _y;
    this.radius = _radius;

  }


  markings() {

    if (mouseIsPressed && mouseY > 100) {
      var mark = {
        x: mouseX,
        y: mouseY
      }
      marks.push(mark);
    }
  }

  displayMarkings() {
    if (marks.length > 1) {
      for (var i = 1; i < marks.length; i++) {
        drawLine(marks[i].x, marks[i].y, marks[i - 1].x, marks[i - 1].y);
      }
    }
  }
}