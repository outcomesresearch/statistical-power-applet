/*
This script handles creating and drawing the various elements of the tool interface.
It calculates the arrays needed to plot the 4 SVG curves (two red, two blue),
plots them and initiates their drag behavior as necessary, plots axes and text, and
updates / replots these elements as necessary when a user changes a parameter or
drags a curve around.
* @Author: Jeffrey Piccirillo (piccirilloj1@gmail.com)
* @Date:   4/30/2018
* @Last Modified by: Jeffrey Piccirillo
* @Last Modified time: 3/10/19
*/

// add an appropriate event listener
const channel = new Channel();
const p = {};

function output(msg, color = "black") {
  $(".console").text(msg).css("color", color);
}

function setValuesNew(changed, event, eventAuthor) {
  event = event || "change";
  const id = Object.keys(changed)[0];
  const value = changed[id];

  p[id] = parseFloat(value);

  // If mu0, mu1, std, alpha, or n change, recalculate power
  if (["mu0", "mu1", "std", "alpha", "n"].includes(id)) {
    p.power = calculateValue("power");
    p.effectsize = calculateValue("effectsize");
  }

  // If mu0, mu1, or std change, recalculate delta
  if (["mu0", "mu1", "std"].includes(id)) {
    p.delta = calculateValue("delta");
  }

  // If power changes, recalculate required sample size to achieve that power
  if (id === "power") {
    p.n = calculateValue("n");
    p.effectsize = calculateValue("effectsize");
  }

  if (id === "delta") {
    p.mu1 = calculateValue("mu1");
    p.power = calculateValue("power");
  }

  if (["alpha", "n"].includes(id)) setClipPaths();

  // Replot axis if a mean or standard deviation changes
  if (["mu0", "mu1", "std"].includes(id)) {
    axisPrep();
  }
  // Emit new p values to presentation layer
  channel.emit(event, eventAuthor);
  return true;
}

//Update size of tool and replot shapes when screensize is changed
$(window).resize(function () {
  // mu1 = internalmu1;
  initScreenSize();
  // plot();
  // channel.emit("change");
});

function setClipPaths() {
  const scaledX = screenScale(p.mu0 - normalcdf(p));

  ["right", "left"].forEach((side) => {
    const x = side === "left" ? 0 : scaledX;
    const width = side === "left" ? scaledX : Math.abs(screen_w - scaledX);
    $(`#rect-clip-${side},#dashedLine`).remove();

    bottomContainers
      .append("clipPath") // define a clip path
      .attr("id", `rect-clip-${side}`) // give the clipPath an ID
      .append("rect") // shape it as a rectangle
      .attr("x", x) // position the top x corner
      .attr("y", 0) // position the y-corner, always 0
      .attr("height", screen_h) // set the height
      .attr("width", width); // set the width

    new Line(scaledX, "dashedLine", "dark");
  });
}

// Spinning wheel to display while loading for slow connections
function startSpinningWheel() {
  setTimeout(prepare, 0);
}

function initScreenSize() {
  screen_w = $(".maingraph").innerWidth(); //Establish screen space
  screen_h = $(".maingraph").innerHeight();
  topscreen_h = $(".minigraph").innerHeight();
}

function appendText(id, anchor, movable, x, y, text) {
  var textObject = anchor
    .append("text")
    .attr("id", id)
    .attr("x", x)
    .attr("y", y)
    .text(text);
  if (movable) {
    textObject.data([{ x: 0 }]);
  }
}

function axisPrep() {
  $(".axis").remove();
  const axisKeys = Array.from(Array(9).keys());
  const ticks = axisKeys.map((v) => v * (screen_w / 8) + 1);
  const ticknames = axisKeys.map((v) =>
    Math.abs(v - 4) === 4 ? "" : (v - 4) * p.std + p.mu0
  );

  //Create the Scale we will use for the Axis
  var axisScale = d3.scaleLinear().domain([0, screen_w]).range([0, screen_w]);

  //Create Axis
  var xAxis = d3
    .axisBottom()
    .scale(axisScale)
    .tickValues(ticks)
    .tickFormat((d, i) => ticknames[i]);

  //Create an SVG group Element for the Axis elements and call the xAxis function
  bottomContainers
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (screen_h - 20) + ")")
    .call(xAxis);
}

//Convert user/axis scale to pixel scale for writing to screen
function screenScale(x) {
  const { mu0, std } = p;
  return d3
    .scaleLinear()
    .domain([mu0 - 4 * std, mu0 + 4 * std])
    .range([0, screen_w])(x);
}

//Convert pixel-scale for writing to screen to user/axis scale
function displayScale(x) {
  const { mu0, std } = p;
  return d3
    .scaleLinear()
    .domain([0, screen_w])
    .range([mu0 - 4 * std, mu0 + 4 * std])(x);
}

//Scale vertically by mapping the max height a curve can have (pdf w n==100) to the screen height
function verticalScale(y) {
  const { mu0, std } = p;
  return d3
    .scaleLinear()
    .domain([0, pdf(mu0, mu0, std / Math.sqrt(100))])
    .range([0, screen_h * 1.16])(y);
}

// function textPrep() {
//   greytextXPos = screen_w - (screen_w / 10) * 9.8;
//   appendText(
//     "smallpinktext",
//     topContainer,
//     1,
//     screenScale({ ...p, x: mu1 }),
//     (topscreen_h / 10) * 2.5,
//     "Alternative Population"
//   );
//   appendText(
//     "smallbluetext",
//     mainContainer,
//     "",
//     screenScale({ ...p, x: mu0 }),
//     (topscreen_h / 10) * 2.5,
//     "Null Population"
//   );
//   appendText(
//     "smallgreytext",
//     mainContainer,
//     "",
//     greytextXPos,
//     screen_h - 50,
//     "Sampling"
//   );
//   appendText(
//     "smallgreytext",
//     mainContainer,
//     "",
//     greytextXPos,
//     screen_h - 35,
//     "Distributions"
//   );
// }

function alphaErrorPrep() {
  d3.selectAll("line, #alphaErrorBlue, #rect-clip").each(function () {
    this.remove();
  });
  // xValue = normalcdf();
  // scaledXValue = screenScale(mu0 - xValue);

  // addPath(
  //   "rect-clip",
  //   "clipPath",
  //   scaledXValue,
  //   Math.abs(screen_w - scaledXValue),
  //   mainContainer,
  //   "",
  //   "",
  //   ""
  // );
  // addPath(
  //   "alphaErrorBlue",
  //   "path",
  //   "",
  //   "",
  //   mainContainer,
  //   firsthalf_main,
  //   screen_h - 20
  // );

  // xValue = normalcdf();
  // scaledXValue = screenScale(mu0 - xValue);

  // mainContainer
  //   .append("line")
  //   .attr("id", "dashedLine")
  //   .attr("x1", scaledXValue)
  //   .attr("y1", screen_h - 20)
  //   .attr("x2", scaledXValue)
  //   .attr("y2", screen_h * 0.1);

  // addPath(
  //   "mainbluestroke",
  //   "path",
  //   "",
  //   "",
  //   mainContainer,
  //   firsthalf_main,
  //   screen_h - 20
  // );
  // checkOverlap();
}

// Calculate normalized difference between the means using mu1, mu0, and std
function calcDelta(mu) {
  delta = parseFloat(((mu - mu0) / std).toFixed(2));
  $("#delta").val(delta);
}

// Validate input before setting internal variables
// Delta, alpha error are validated in changeDelta() alphaErrorPrep()
// Beta error is not validated as it is readonly
// function setValues() {
//   ["mu0", "mu1", "std", "alpha", "n"].forEach((param) => {
//     $(`#${param}`).val(validValues[param].initial);
//   });

//   mu0 = parseInt($("#mu0").val());
//   mu1 = parseInt($("#mu1").val());
//   std = parseInt($("#std").val());
//   alpha = parseFloat($("#alpha").val());
//   n = parseInt($("#n").val());
//   power = calculatePower(mu1);
//   $("#effectsize").val((1 - power).toFixed(3));
//   internalmu1 = mu1;

//   //Delta is set as a function of mu0, mu1, and standard dev
//   calcDelta(internalmu1);

//   $("#slider-vertical2").slider("value", power);
//   $("#power").val(power.toFixed(3));
// }

// Calculate sample size based on power.  Used when power is being set
// by the user through the text entry box or the slider, and a resulting
// sample size must be calculated
function calcSampleSize(temp_power) {
  return Math.pow(
    ((inv(temp_power - cdf(inv(alpha / 2, 0, 1), 0, 1), 0, 1) +
      inv(1 - alpha / 2, 0, 1)) *
      std) /
      (mu1 - mu0),
    2
  );
}

// Respond to drag events
function dragged(d) {
  // console.log("internalmu1: ", internalmu1, "mu1: ", mu1)
  d3.selectAll("#triangle, #sampleMeanLine, .bar").each(function () {
    this.remove();
  });
  $(".console").text("");
  calcDelta(internalmu1);
  d3.select("#mainpink").attr("transform", function (d) {
    d.x += d3.event.dx;
    return "translate(" + [d.x, screen_h - 20] + ") scale(1,-1)";
  });
  d3.select("#smallpink").attr("transform", function (d) {
    d.x += d3.event.dx;
    return "translate(" + [d.x, topscreen_h] + ") scale(1,-1)";
  });
  d3.select("#smallpinktext").attr("transform", function (d) {
    d.x += d3.event.dx;
    return "translate(" + [d.x, 0] + ")";
  });

  $("#mu1").val(Math.round(mu1 + (d.x * 8 * std) / screen_w));
  internalmu1 = mu1 + (d.x * 8 * std) / screen_w;
  // console.log("before calculating power: ", internalmu1)
  power = calculatePower(internalmu1);
  // console.log("after calculating power: ", internalmu1)
  // console.log("mu before entering checkOverlap: ", internalmu1)
  checkOverlap(internalmu1);
  setPowerSampleSize();
}

// Coordinates the creation of most shapes on the screen
function plot() {
  $(".bar").remove();
  curveFactory();
  pathFactory();
  alphaErrorPrep();
  axisPrep();
  textPrep();
}

// When tool loads for the first time, initialize screen size and prepare the
// containers to which later shapes will be drawn.  Then call plot() to carry
// out rest of shape creation
function prepare() {
  $("#loader").remove();
  $(".container").css("display", "block");
  $("#description").css("display", "block");
  initScreenSize();

  // Set initial values object (p)
  Object.keys(validValues).forEach((param) => {
    const valid = validValues[param];
    p[param] = valid.initial ? valid.initial : calculateValue(param);
  });

  setValues();

  bottomContainers = d3
    .select(".maingraph")
    .append("svg")
    .attr("width", screen_w)
    .attr("height", screen_h);

  topContainers = d3
    .select(".minigraph")
    .append("svg")
    .attr("width", screen_w)
    .attr("height", topscreen_h);

  containers = {
    top: {
      back: topContainers.append("g"),
      front: topContainers.append("g"),
    },
    bottom: {
      back: bottomContainers.append("g"),
      front: bottomContainers.append("g"),
    },
  };

  setClipPaths();

  // Blue curves (null population)
  const nullPopulation = {
    center: "mu0",
    clip: "right",
    color: "21, 67, 96",
    text: "Null Population",
  };

  const alternativePopulation = {
    center: "mu1",
    clip: "left",
    color: "139, 0, 0",
    text: "Alternative Population",
  };

  new Curve(
    Object.assign({}, nullPopulation, {
      position: "bottom",
      draggable: false,
      id: "mainblue",
    })
  );

  new Curve(
    Object.assign({}, nullPopulation, {
      position: "top",
      draggable: false,
      hasText: true,
      textPosition: "below",
      id: "mainblue-top",
    })
  );

  // Red curves (alternative population)
  new Curve(
    Object.assign({}, alternativePopulation, {
      position: "bottom",
      draggable: true,
      id: "mainpink",
    })
  );

  new Curve(
    Object.assign({}, alternativePopulation, {
      position: "top",
      draggable: true,
      hasText: true,
      textPosition: "above",
      id: "mainpink-top",
    })
  );

  axisPrep();
}

// When the "Sample" button is pushed:
// - Takes a random n number of sample of from the alternative population.
// - Draws and stacks these to the top screen in a stylized histogram.
// - Calculates mean sample, and determines whether or not to reject Ho
// - Writes information to the tool's console
function sample() {
  let { mu0, mu1, std, alpha, n } = p;

  if (mu1 < mu0) {
    mu0 = mu0.toFixed(2);
    mu1 = mu1.toFixed(2);
    output(
      `μ0 = ${mu0}\nμ1 = ${mu1}\n Not designed for two-tailed tests (μ1 < μ0)`,
      "Crimson"
    );
    return;
  }

  // Remove previous histogram bars, triangle, and vertical sample line
  $(".bar,#sampleMeanLine,#triangle").remove();

  // Sample the alternative distribution n times and scale positions to screen
  const randomValues = d3
    .range(Math.round(n))
    .map(d3.randomNormal(mu1, std))
    .map((val) => screenScale(val));

  const d3mean = d3.mean(randomValues);

  // Grey vertical line + triangles pointing to mean of sample values
  new Line(d3mean, "sampleMeanLine");
  new Triangle({ x: d3mean, y: screen_h - 10 });
  new Triangle({ x: d3mean, y: 10 });

  // Calculate x-scaling for histogram
  const x = d3.scaleLinear().domain([0, screen_w]).rangeRound([0, screen_w]);

  const bins = d3.histogram().domain(x.domain()).thresholds(x.ticks(90))(
    randomValues
  );

  // Calculate y-scaling for histogram
  const largestStack = d3.max(bins, (d) => d.length);
  const max = largestStack > 8 ? largestStack : 8;
  const y = d3
    .scaleLinear()
    .domain([0, max * 1.5])
    .range([topscreen_h, 0]);

  topContainers
    .selectAll(".bar")
    .data(bins)
    .enter()
    .append("g")
    .attr("class", "bar")
    .attr("transform", (d) => "translate(" + x(d.x0) + "," + y(d.length) + ")")
    .append("rect")
    .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
    .attr("height", (d) => topscreen_h - y(d.length))
    .attr("rx", 2)
    .attr("rx", 2)
    .style("fill", "#ffffff")
    .style("stroke", "grey");

  const sampleMean = displayScale(d3mean);
  const zvalue = (mu0 - sampleMean) / (std / Math.sqrt(n));
  const ztest_result = ztest(zvalue, 1);

  // Switch to write 'fail to reject' or 'reject' based on value of ztest_result
  let msg = `Cohen's d = ${p.delta.toFixed(validValues.delta.precision)}\n`;
  msg += `Critical Mean Value = ${(mu0 - normalcdf(p)).toFixed(2)}\n`;
  msg += `Sample Mean = ${sampleMean.toFixed(2)}\n`;
  msg += `p(z > ${zvalue.toFixed(2) * -1}) = ${ztest_result.toFixed(4)}\n`;

  // Write text to tool's console depending on result
  ztest_result >= alpha
    ? output(`${(msg += `-> Fail to Reject Ho`)}`, "Navy")
    : output(`${(msg += `-> Reject Ho`)}`, "Crimson");
}
