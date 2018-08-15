import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Button, Image, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';
import BookSearch from './BookSearch'

const Truncated = styled.div`
  height: 150px;
  font-size: 12px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `

const LittleMeta = styled.span`
  font-size: 10px;
`

class AllBooks extends Component {
  state = { books: [] }

  
  bookCard = () => {
    let { books } = this.state;
    return books.map(b => {
      return <Card key={b.id}>
          <Card.Content>
            <Grid columns={2} celled="internally">
              <Grid.Column>
                <Card.Header>
                  <Link to={`books/${b.id}`}>{b.title}</Link>
                </Card.Header>
                <Card.Meta>
                  <span className="author">by {b.author}</span>
                <hr />
                </Card.Meta>
                <Card.Meta>
                  <span className="difficulty">{b.difficulty} level</span>
                </Card.Meta>
              </Grid.Column>

              <Grid.Column>
                <Image src={b.book_image} height="120" />
              </Grid.Column>
            </Grid>
            <Card.Description>
              <Truncated>
                <div className="blurb">{b.blurb}</div>
              </Truncated>
            </Card.Description>

            <Grid columns={2} celled="internally">
              <Grid.Column>
                <Card.Meta>
                  <LittleMeta>
                    <span className="keywords">Keywords: {b.keywords}</span>
                  </LittleMeta>
                </Card.Meta>
              </Grid.Column>

              <Grid.Column>
                <Card.Meta>
                  <LittleMeta>
                    <span className="lessons">Symptoms: {b.lessons}</span>
                  </LittleMeta>π
                </Card.Meta>
              </Grid.Column>
            </Grid>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button color="blue">
                Like
              </Button>
              <Button color="green">
                <Link to={`/books/${b.id}`}>View Book</Link>
              </Button>
            
              
            </div>
          </Card.Content>
        </Card>;
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
    return (
      <Container>
        <BookSearch />
        <br />
        <Grid columns={4} celled="internally">
          <Card.Group stackable itemsPerRow={3}>
            {this.bookCard()}
          </Card.Group>
        </Grid>
      </Container>
    )
  }
}

export default AllBooks;