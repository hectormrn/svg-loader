/**
 * @author hector.mrn55@gmail.com
 * @description ...
 */
import React, { Component } from 'react';
import './css/App.css';
import './css/cbe_phone.css';
import * as svgMap from './svgmap.json';
import { IconWrapper } from './template';

class App extends Component {
  render() {
    const tag = svgMap.svg['cbePhone']
    return (
      <div className="App">
        <header className="App-header">
        <IconWrapper cssClass="cbe" data={tag} />
          <code className="code-inspector">
            {tag}
          </code>
        </header>
      </div>
    );
  }
}

export default App;
