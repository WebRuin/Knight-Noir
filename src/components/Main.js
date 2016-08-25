require('normalize.css/normalize.css');
require('styles/App.css');

const style = 'styles/App.css';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">Welcome to Knight Noir!</div>
        <p className="intro">
          Relax, Let go, let you sensual mind have fun, and write you lover a steamy interactable dairy entry or ;)!
      </p>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
