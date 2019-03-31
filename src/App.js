/** @jsx jsx */
import { Component } from "react";
import StreamGraphCanvas from "./components/StreamGraphCanvas";
import { jsx, css } from "@emotion/core";

const appStyle = css`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #ddd;
`;

class App extends Component {
  state = {
    streamGraph: {
      data: [],
      lastRedrawRequest: null,
      width: null,
      height: null
    }
  };

  requestRedraw = (width, height) => {
    this.setState({
      ...this.state,
      streamGraph: {
        ...this.state.streamGraph,
        lastRedrawRequest: Date.now(),
        width,
        height
      }
    });
  };

  render() {
    const { requestRedraw } = this;
    const {
      streamGraph: { data, lastRedrawRequest, width, height }
    } = this.state;

    return (
      <div css={[appStyle]}>
        <StreamGraphCanvas
          requestRedraw={requestRedraw}
          data={data}
          lastRedrawRequest={lastRedrawRequest}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

export default App;
