import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

const names = [
  "Trevor",
  "Steven",
  "Nathan",
  "Victor",
  "Tu",
  "Leland",
];

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root names={names}/>, document.getElementById('root'));
});
