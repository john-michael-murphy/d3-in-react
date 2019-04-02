/** @jsx jsx */
import { Component } from "react";
import VisualizationCanvas from "./components/VisualizationCanvas";
import { jsx } from "@emotion/core";
// import { makeRandomData } from "./utils";
import { appStyle, buttonStyle } from "./styled";

class App extends Component {
  state = {
    // visualization: {
    //   data: null,
    //   lastRedrawRequest: null,
    //   width: null,
    //   height: null
    // }
  };

  handleDataUpdate = () => {
    //
  };

  handleResize = (width, height) => {
  //
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
        <button css={[buttonStyle]} /* onClick={}*/>
          Redraw
        </button>
      </div>
    );
  }
}

export default App;
