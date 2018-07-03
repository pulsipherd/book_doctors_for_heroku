import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../FakeAuth';

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/AllBooks">All Books</NavLink>
    {' '}
    {isAuthenticated() ?
      <NavLink activeStyle={styles.active} to="/dashboard"> Dashboard</NavLink>
      <NavLink activeStyle={styles.active} to="/login"> Login</NavLink>
    }
  </nav>
)

export default NavBar;