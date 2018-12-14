/**
 * @author hector.mrn55@gmail.com
 * @description ...
 */
import React, { Component } from 'react';
import './css/App.css';
import './css/cbe_phone.css';
import { IconWrapper } from './template';

class App extends Component {

  render() {
    const svgProps = {cssClass: "cbe", svgIcon: "cbePhone"};
    return (
      <div className="App">
        <header className="App-header">
        <IconWrapper {...svgProps} />
          <code className="code-inspector">
            {JSON.stringify(svgProps)}
          </code>
        </header>
      </div>
    );
  }
}

export default App;
