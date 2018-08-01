import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Book from './components/Book';
import AllBooks from './components/AllBooks';
import ChangeForm from './components/ChangeForm';
import CreateForm from './components/CreateForm';
import FetchUser from './components/FetchUser';
import NewBookContainer from './components/NewBookContainer';


const App = () => (
  <div className="background">
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/allbooks" component={AllBooks} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/NewBookContainer" component={NewBookContainer} />
        <ProtectedRoute path="/CreateForm" component={CreateForm} />
        <ProtectedRoute path="/ChangeForm" component={ChangeForm} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/books/:id" component={Book} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
    <Footer />
  </div>
);
    
export default App;