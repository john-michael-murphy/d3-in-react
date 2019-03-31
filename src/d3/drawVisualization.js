import * as d3 from "d3";

export default function drawStreamGraph({ target, height, width, data, handlers }) {
  const svg = d3.select(target);
  let nodes = svg.selectAll("circle").data(data, d => d.id);

  nodes
    .exit()
    .transition()
    .attr("r", 0)
    .remove();

  nodes = nodes
    .enter()
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("transform", d => `translate(${width / d.x}, ${height / d.y})`)
    .merge(nodes);

  nodes
    .transition()
    .attr("r", d => d.r)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("transform", d => `translate(${width / d.x}, ${height / d.y})`);

  return svg.node();
}
