import React from 'react';

import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <AutoComplete names={this.props.names}/>
      </div>
    );
  }
}

export default Root;
