/** @jsx jsx */
import { Component, createRef } from "react";
import debounce from "lodash.debounce";
import { jsx, css } from "@emotion/core";
import drawVisualization from "../d3/drawVisualization";

const containerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class VisualizationCanvas extends Component {
  containerRef = createRef();
  svgRef = createRef();

  resize = debounce(() => {
    const { width, height } = this.containerRef.current.getBoundingClientRect();
    this.props.handleResize(width, height);
  }, 250);

  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.resize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize, false);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.lastRedrawRequest > this.props.lastRedrawRequest;
  }

  componentDidUpdate() {
    const { width, height, data, handlers } = this.props;
    const target = this.svgRef.current;

    drawVisualization({ target, width, height, data, handlers });
  }

  render() {
    const { width, height } = this.props;
    const { containerRef, svgRef } = this;

    return (
      <div css={[containerStyle]} ref={containerRef}>
        <svg width={width} height={height} ref={svgRef} />
      </div>
    );
  }
}

export default VisualizationCanvas;
