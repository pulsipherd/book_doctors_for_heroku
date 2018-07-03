import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../FakeAuth';

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

conat additionalLinks = (history) => {
  if (isAuthenticated()) {
    return (
      <span>
        <NavLink activeStyle={styles.active} to="/dashboard">Dashboard</NavLink>
        {' '}
        <a href="" onClick={() => {
          logout()
          history.push("/login")
        }}>
          Logout
        </a>
      <span>
    )
  } else {
    return (
      <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
    )
  }
}
      
      const NavBar = ({ history }) => (
        <nav>
          <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
          {' '}
          <NavLink activeStyle={styles.active} to="/about">About</NavLink>
          {' '}
          {additionalLinks(history)}
          <NavLink activeStyle={styles.active} to="/AllBooks">All Books</NavLink>
        </nav>
      )

export default NavBar;