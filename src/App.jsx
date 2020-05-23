import React, { Component } from "react";

class App extends Component {
  render() {
    const content = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class.
      </p>
    );
    return <div className="app">{content}</div>;
  }
}
export default App;
