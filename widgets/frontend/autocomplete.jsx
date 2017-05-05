import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { inputVal: '' };
  }

  render() {
    console.log(this.state.inputVal);
    return (
      <div className="auto-complete">
        <input type="text" id="input"></input>
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

  componentDidMount() {
    const input = document.getElementById("input");
    input.addEventListener("input", (e) => {
      e.preventDefault();
      this.setState({ inputVal: input.value });
    });
  }
}

export default AutoComplete;
