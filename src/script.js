const numPeople = { 'black-victims': 197, 'white-victims': 26 };
const numNoSuspect = { 'black-victims': 65, 'white-victims': 5 };

/* Alphabet icon generating */

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const peoplesPerLine = {
  0: 13,
  460: 13,
  600: 26,
};
let peoplePerLine;
for (const minWidth in peoplesPerLine) {
  console.log(window.innerWidth, minWidth)
  if (window.innerWidth > minWidth) {
    peoplePerLine = peoplesPerLine[minWidth];
  }
}

// TODO: ADD WINDOW RESIZE

function getIndices(id) {
  const indices = new Array(numPeople[id]).fill().map((_, i) => i);
  const n = numNoSuspect[id];
  // return indices.sort(() => .5 - Math.random()).slice(0, n); // Random
  return indices.slice(0, n); // Front
}

function drawPeople(id) {
  const el = document.getElementById(id);
  
  const letters = [];
  for (let i = 0; i < numPeople[id]; i++) {
    const span = document.createElement('span');
    span.innerText = ALPHABET[(Math.random() * ALPHABET.length) << 0];
    if (i < numNoSuspect[id])
      span.classList.add('highlight-person');
    el.appendChild(span);
    if ((i + 1) % peoplePerLine == 0)
      el.appendChild(document.createElement('br'))
  }
}

drawPeople('black-victims');
drawPeople('white-victims');

function highlightPercentagesInCaptions() {
  document.getElementsByClassName('.icons-caption').forEach(caption => {
    // caption.innerHTML = caption.innerHTML.replace()
  });
}
// highlightPercentagesInCaptions()

/* Text balancing maybe */

// import textBalancer from 'text-balancer';
// textBalancer.balanceText('.victims');

/* D3 force stuff */
/*

function forceIcons() {
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
}

*/