import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../FakeAuth';

const Dashboard = () => {
  if (isAuthenticated()) {
    return (
      <div>
        <h3> You are logged in!</h3>
      </div>
    )
  } else {
    return <Redirect to="/login" />
  }
}

export default Dashboard;
