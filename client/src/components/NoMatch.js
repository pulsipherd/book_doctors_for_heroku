import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    <h3>I'm afraid you're looking for a page from another book!</h3>
    <p>Please contact our <Link to={mailto: pulsipherd@gmail.com}> head pharmasist</Link> and tell him what's missing!</p>
  </div>
);

export default NoMatch;