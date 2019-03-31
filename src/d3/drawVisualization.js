import * as d3 from "d3";

export default function drawStreamGraph({ target, height, width, data, handlers }) {
  const svg = d3.select(target);
  let nodes = svg.selectAll("circle").data(data, d => d.id);

  const forceManyBody = d3.forceManyBody().strength(100);
  const center = d3.forceCenter(width / 2, height / 2);
  const forceCollide = d3.forceCollide().radius(d => d.r);

  const simulation = d3
    .forceSimulation(data)
    .force("charge", forceManyBody)
    .force("center", center)
    .force("collision", forceCollide)
    .on("tick", ticked);

  nodes
    .exit()
    .transition()
    .attr("r", 0)
    .remove();

  nodes = nodes
    .enter()
    .append("circle")
    .attr("fill", "white")
    .merge(nodes);

  nodes.transition().attr("r", d => d.r);

  function ticked() {
    nodes.attr("transform", positionNode);
  }

  function positionNode(d, ...rest) {
    return `translate(${d.x}, ${d.y})`;
  }

  return svg.node();
}
