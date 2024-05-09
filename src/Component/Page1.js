// Page1.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Page1(props) {
  return (
    <div>
      <h2>Page 1</h2>
      <p>Data: {props.data}</p>

      <h1>Connect with :{props.data}</h1>
      <Link to="/page2">Go to Page 2</Link>
    </div>
  );
}
