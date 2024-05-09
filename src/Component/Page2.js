// Page2.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Page2(props) {
  return (
    <div>
      <h2>Page 2</h2>
      <p>Data: {props.data} </p>

      <h1>Connect with:{props.data}</h1>
      <Link to="/page1">Go to Page 1</Link>
    </div>
  );
}
