import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


class AllBooks extends Component {
  state = { books: [] }

  componentDidMount() {
    axios.get('api/books/')
      .then(res => this.setState({ books: res.data }))
    // .then(books => this.setState({ books }) )

    // method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application.json'
    // },
    // body: Book.title
    // )
  }
  render() {
    let { books } = this.state;
    return (
      <div>
        <ul>
          {books.map(b => <li key={b.id}>
            <Link to={`api/books/${b.id}`}>
              {b.title}
            </Link>, {b.author}, {b.blurb}
          </li>)}
        </ul>
      </div>
    )
  }
}

export default AllBooks;