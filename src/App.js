import { Hello } from "./Hello";
import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={64} />
      </div>
    );
  }
}
