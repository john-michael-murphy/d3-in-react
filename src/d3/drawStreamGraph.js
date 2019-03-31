import * as d3 from "d3";

export default function drawStreamGraph({ target, height, width, data, handlers }) {
  // const stack = d3
  //   .stack()
  //   .keys(d3.range(n))
  //   .offset(d3[offset])
  //   .order(d3[order]);
  //
  // const svg = d3.select(DOM.svg(width, height));
  //
  // const x = d3
  //   .scaleLinear()
  //   .domain([0, m - 1])
  //   .range([0, width]);
  //
  // const y = d3.scaleLinear().range([height, 0]);
  //
  // const z = d3.interpolateCool;
  //
  // const area = d3
  //   .area()
  //   .x((d, i) => x(i))
  //   .y0(d => y(d[0]))
  //   .y1(d => y(d[1]));
  //
  // function randomize() {
  //   const layers = stack(d3.transpose(Array.from({ length: n }, () => bumps(m, k))));
  //   y.domain([d3.min(layers, l => d3.min(l, d => d[0])), d3.max(layers, l => d3.max(l, d => d[1]))]);
  //   return layers;
  // }
  //
  // const path = svg
  //   .selectAll("path")
  //   .data(randomize)
  //   .enter()
  //   .append("path")
  //   .attr("d", area)
  //   .attr("fill", () => z(Math.random()));
  //
  // const interval = d3.interval(() => {
  //   path
  //     .data(randomize)
  //     .transition()
  //     .duration(1500)
  //     .attr("d", area);
  // }, 2500);
  //
  // invalidation.then(() => interval.stop());
  //
  // return svg.node();
}
