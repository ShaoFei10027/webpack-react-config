require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { hot } from 'react-hot-loader'
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default hot(module)(AppComponent);