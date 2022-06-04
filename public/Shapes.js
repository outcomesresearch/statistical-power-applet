class Triangle {
  constructor(position) {
    bottomContainers
      .append("path")
      .attr("id", "triangle")
      .attr("d", d3.symbol().type(d3.symbolTriangle))
      .attr("transform", `translate(${position.x}, ${position.y})`)
      .style("fill", "grey");
  }
}

class Line {
  constructor(x, id, dark) {
    bottomContainers
      .append("line")
      .attr("id", id)
      .attr("x1", x)
      .attr("y1", screen_h - 20)
      .attr("x2", x)
      .attr("y2", screen_h * 0.1)
      .style("stroke", dark ? "#283747" : "grey")
      .style("stroke-width", "2")
      .style("stroke-dasharray", "4, 4");
  }
}

class Curve {
  constructor(options) {
    Object.assign(this, options);
    this.isBottom = this.position === "bottom";

    const replot = (id) => {
      // Only clear and readd path if this curve isnt the one being dragged
      if (this.id !== id) this.removePath() && this.addPath();
    };

    this.addPath();
    channel.on("change", replot);
    channel.on("drag", replot);
  }

  /**
   * Coordinate calculating an array of values to draw a normal distribution curve.  Position parameter is to specify that we're drawing a flattened curve in the top pane
   */
  generateCurve() {
    let { std, n } = p;
    if (!this.isBottom) n = 1.25;
    const l_bound = p[this.center] - 4 * std;
    const u_bound = p[this.center] + 4 * std;
    const array = [];
    const step = (8 * std) / 20;
    const offset = this.isBottom
      ? $(".maingraph").innerHeight() - 20
      : $(".minigraph").innerHeight() + 1;

    for (let k = l_bound; k < u_bound; k += step) {
      const x = screenScale(k);
      const y = verticalScale(-1 * pdf(k, p[this.center], std / Math.sqrt(n)));
      array.push({ x, y: y + offset });
    }
    return array;
  }

  drag() {
    return d3.drag().on("drag", (d) => {
      const newMu = p[this.center] + (d3.event.dx * 8 * p.std) / screen_w;
      const changed = { [this.center]: newMu };
      validate(changed) &&
        setValuesNew(changed, "drag", this.id) &&
        (d.x += d3.event.dx);

      const targets = `#${this.id}-error,#${this.id}-container`;
      d3.selectAll(targets).attr("transform", `translate(${d.x})`);
    });
  }

  /**
   * Append SVGs to the screen
   * - One in the bottom pane, the main curve
   * - One curve with a darker background, representing the alpha error
   */
  addPath() {
    this.container =
      containers[this.position][this.id.includes("pink") ? "front" : "back"];

    const curveFunction = d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveBasis);

    const curve = this.generateCurve();

    this.nonErrorCurves = this.container
      .append("g")
      .attr("id", `${this.id}-container`)
      .attr("class", "curveContainer");

    this.isBottom &&
      this.container
        .append("g")
        .attr("id", `clip-wrapper-${this.id}`)
        .attr("clip-path", `url(#rect-clip-${this.clip})`)
        .append("path")
        .attr("id", `${this.id}-error`)
        .attr("d", curveFunction(this.generateCurve()))
        .attr("fill", `rgba(${this.color}, .70)`);

    this.nonErrorCurves
      .append("path")
      .attr("d", curveFunction(curve))
      .attr("fill", this.isBottom ? `rgba(${this.color}, .60)` : `transparent`)
      .attr("stroke", `rgba(${this.color}, 1)`);

    this.hasText && this.addText(curve);

    if (this.draggable) {
      this.nonErrorCurves.data([{ x: 0 }]).call(this.drag());
    }
  }

  removePath() {
    $(".bar,#sampleMeanLine,#triangle").remove();
    $(`#clip-wrapper-${this.id},#${this.id}-container`).remove();
    return true;
  }

  addText(curve) {
    const lineFunction = d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveLinear);

    // Append path (a line) to our non-error curve grouping
    this.nonErrorCurves
      .append("path")
      .attr("id", `${this.id}-rect`)
      .attr("d", lineFunction(getLineCoordinates(curve, this.textPosition)));

    this.nonErrorCurves
      .append("text")
      .style("fill", `rgb(${this.color})`)
      .append("textPath") //append a textPath to the text element
      .attr("xlink:href", `#${this.id}-rect`) //place the ID of the path here
      .attr("startOffset", "50%")
      .text(this.text);
  }
}

/**
 * Get two points representing a horizontal line tangent to the top hump of the curve ("above"), or a horizontal line representing the bottom of the curve.  This is to be able to affix text to the line and add a text label to the curves
 * @param { Array } arr Curve to analyze
 * @param { String } position "below" or "above"
 * @returns { Array } An array with two coord objects representing the ends of the line
 */
function getLineCoordinates(arr, position) {
  const mid = Math.round(arr.length / 2) - 1;
  const last = arr.length - 1;
  const topLeft = { x: arr[0].x, y: arr[mid].y - 10 };
  const bottomLeft = { x: arr[0].x, y: arr[0].y + 20 };
  const topRight = { x: arr[last].x, y: arr[mid].y - 10 };
  const bottomRight = { x: arr[last].x, y: arr[last].y + 20 };
  return position === "below" ? [bottomLeft, bottomRight] : [topLeft, topRight];
}
