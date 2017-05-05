import React from 'react';

import Clock from './clock';
import Weather from './weather';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
}

export default Root;
