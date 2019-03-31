/** @jsx jsx */
import { Component } from "react";
import VisualizationCanvas from "./components/VisualizationCanvas";
import { jsx } from "@emotion/core";
import { makeRandomData } from "./utils";
import { appStyle, buttonStyle } from "./styled";

class App extends Component {
  state = {
    visualization: {
      data: makeRandomData(),
      lastRedrawRequest: null,
      width: null,
      height: null
    }
  };

  handleDataUpdate = () => {
    this.setState({
      ...this.state,
      visualization: {
        ...this.state.visualization,
        data: makeRandomData(),
        lastRedrawRequest: Date.now()
      }
    });
  };

  handleResize = (width, height) => {
    this.setState({
      ...this.state,
      visualization: {
        ...this.state.visualization,
        lastRedrawRequest: Date.now(),
        width,
        height
      }
    });
  };

  render() {
    const { handleDataUpdate, handleResize } = this;
    const {
      visualization: { data, lastRedrawRequest, width, height }
    } = this.state;

    return (
      <div css={[appStyle]}>
        <VisualizationCanvas
          data={data}
          handleResize={handleResize}
          lastRedrawRequest={lastRedrawRequest}
          width={width}
          height={height}
        />
        <button css={[buttonStyle]} onClick={handleDataUpdate}>
          Redraw
        </button>
      </div>
    );
  }
}

export default App;
