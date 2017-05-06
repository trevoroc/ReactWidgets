import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
  }

  render() {
    return (
      <div className="auto-complete">
        <input onChange={this.handleChange.bind(this)} type="text" id="input"></input>
        <ul className="auto-complete-suggestions">
          {
            this.props.names.filter( (name) => {
              const regexp = new RegExp(this.state.inputVal, 'i');
              return regexp.test(name);
            }).map( function (name, i) {
              return <li key={i}>{name}</li>;
            })
          }
        </ul>
      </div>
    );
  }

  handleChange(event){
    this.setState({ inputVal: event.target.value });
  }



}

export default AutoComplete;
