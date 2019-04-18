import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';


class App extends Component {
  render() {
    return (

      <div key={"timeline"}>
        <Header  key={"timelineHeader"}/>
        <Timeline key={"timelineTimeLine"} />
      </div>

    );
  }
}

export default App;
