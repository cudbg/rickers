function setup() {
  // uncomment this line to make the canvas the full size of the window
  canvas = createCanvas(windowWidth, windowHeight);
  $("#container").append(canvas.elt)
  y = 0;
  loop();
}

function circle(x, y, r) {
  r = (r == null)? 10 : r;
  return ellipse(x, y, r, r);
}

function refresh() {
  return background(246);
}

function draw() {
}


function recompile() {
  $('#msg').text("");
  eval(
      "draw = function() { try { " + editor.getValue() + " } catch(e) {" +
      " $('#msg').text(e.toString()); " +
      "} };"
  );
}


$(function() {
  recompile();
  $("button").click(function() {
    recompile()
  });
});