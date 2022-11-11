import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App!</h1>
      </div>
    );
  }
}

export default App;
