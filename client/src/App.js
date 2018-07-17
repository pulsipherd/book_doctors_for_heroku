import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Book from './components/Book';
import AllBooks from './components/AllBooks';
import ChangeForm from './components/ChangeForm';


const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/allbooks" component={AllBooks} />
      <ProtectedRoute path="/ChangeForm" component={ChangeForm} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/books/:id" component={Book} />

      <Route component={NoMatch} />
    </Switch>
  </div>
);
    
export default App;