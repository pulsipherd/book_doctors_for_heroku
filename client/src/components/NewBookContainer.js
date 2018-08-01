import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ChangeForm from './ChangeForm';

class NewBookContainer extends React.Component {
  state = { books: [], showForm: false }

  componentDidMount() {
    axios.get('/api/books')
      .then(res => this.setState({ books: res.data }))
  }

  show() {
    let { books } = this.state;
    return (
      <ul>
        {books.map(b =>
          <li key={b.id}>
            <Link to={`/books/${b.id}`} > {b.name}</Link>
          </li>
        )}
      </ul>
    )
  }


  form() {
    return <ChangeForm submit={this.submit} />
  }
  submit = (book) => {
    let { books } = this.state
    axios.post('/api/books', { book })
      .then(res => this.setState({
        books: [res.data, ...books], showForm:
          false
      }))
  }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    let { showForm } = this.state;
    return (
      <div>
        <h2>Books</h2>
        <button onClick={this.toggleForm}>{ 'Show' } form</button>
        { this.show() }
      </div>
    )
  };
}

export default NewBookContainer;
