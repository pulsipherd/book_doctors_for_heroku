import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Button } from 'semantic-ui-react';
import axios from 'axios';


class AllBooks extends Component {
  state = { books: [] }
  
  bookCard = () => {
    let { books } = this.state;
    return books.map(b => {
      return(
      <Card key={b.id}>
          <Card.Content>
              <Card.Header>
                <Link to={`books/${b.id}`}>
                {b.title}
                </Link>
              </Card.Header>

            <Card.Meta>
              <span className='difficulty'>
                {b.difficulty}
              </span>
            </Card.Meta>

            <Card.Description>
              <span className='blurb'>
                {b.blurb}
              </span>
            </Card.Description>

            <Card.Meta>
              <span classNamw='keywords'> 
                Keywords: {b.keywords} | Lessons: {b.lessons}
              </span>
            </Card.Meta>

          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='blue'>
                Like
              </Button>
              <Button basic color='green'>
                <Link to={`/books/${b.id}`}>
                View Book
                </Link>
              </Button>
            </div>
          </Card.Content>
      </Card>
      )
    })
  }

  componentDidMount() {
    axios.get('api/books/')
      .then(res => this.setState({ books: res.data }))
  }

  updateBook = id => {
    axios.put(`/api/books/${id}`)
      .then(({ data }) => {
        const books = this.state.books.map(book => {
          if (book.id === id)
            return data
          return book
        });

        this.setState({ books });
      });
  }

  render() {
    return <div>
        <Grid columns={4} celled="internally">
          <Card.Group stackable itemsPerRow={3}>
            {this.bookCard()}
          </Card.Group>
        </Grid>
      </div>;
  }
}

export default AllBooks;