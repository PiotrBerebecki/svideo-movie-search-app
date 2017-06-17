import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing">
      <h1>svide</h1>
      <input type="text" placeholder="Search" />
      <Link to="/search">or Browse all</Link>
    </div>
  );
}

export default Landing;