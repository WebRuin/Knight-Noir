'use strict';

import React from 'react';

require('styles//NoirBook.scss');

class NoirBook extends React.Component {
  render() {
    return (
      <div className="noirbook">
        Welcome Knight Noir!
      </div>
    );
  }
}

NoirBook.displayName = 'NoirBook';

// Uncomment properties you need
// NoirBookComponent.propTypes = {};
// NoirBookComponent.defaultProps = {};

export default NoirBook;
