/** @jsx jsx */
import { Component } from "react";
// import debounce from "lodash.debounce";
import { jsx, css } from "@emotion/core";
// import drawVisualization from "../d3/drawVisualization";

const containerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class VisualizationCanvas extends Component {

  render() {
    const { width, height } = this.props;
    // const { containerRef, svgRef } = this;

    return (
      <div css={[containerStyle]} /* ref={containerRef} */>
        <svg width={width} height={height} /* ref={svgRef} */ />
      </div>
    );
  }
}

export default VisualizationCanvas;
