/* Text balancing maybe */

import textBalancer from 'text-balancer';
textBalancer.balanceText('.victims');

/* D3 force stuff */

var PIXEL_RATIO = (function () {
  var ctx = document.createElement("canvas").getContext("2d"),
    dpr = window.devicePixelRatio || 1,
    bsr = ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio || 1;

  return dpr / bsr;
})();

const createHiDPICanvas = (w, h, ratio) => {
  if (!ratio) { ratio = PIXEL_RATIO; }
  var can = document.createElement("canvas");
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
};

var canvas = createHiDPICanvas(500, 250);
document.getElementById('canvas-container').appendChild(canvas);
var context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height,
    tau = 2 * Math.PI;

var nodes = d3.range(1100).map(function(i) {
  return {
    person: ALPHABET[(Math.random() * ALPHABET.length) << 0],
    r: 6,
  };
});

var simulation = d3.forceSimulation(nodes)
    .velocityDecay(0.2)
    .force("x", d3.forceX().strength(0.002))
    .force("y", d3.forceY().strength(0.002))
    .force("collide", d3.forceCollide().radius(function(d) { return d.r + 0.5; }).iterations(2))
    .on("tick", ticked);

function ticked() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);

  context.beginPath();
  nodes.forEach(function(d) {
    context.font = 'normal 20px WeePeople';
    context.fillText(d.person, d.x, d.y);
    // context.moveTo(d.x + d.r, d.y);
    // context.arc(d.x, d.y, d.r, 0, tau);
  });
  context.fillStyle = "#ddd";
  context.fill();
  context.strokeStyle = "#333";
  context.stroke();

  context.restore();
}