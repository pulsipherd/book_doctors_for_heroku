import React from 'react';
import axios from 'axios';
import ChangeForm from './ChangeForm';
import { Header, Grid, Image, Container, Button, Card } from "semantic-ui-react";


class Book extends React.Component {
  state = { book: {}, edit: false }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}`)
        .then( res => this.setState({ book: res.data }) ) 
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (book) => {
    axios.put(`/api/books/${this.props.match.params.id}`, { book })
      .then(res => this.setState({ book: res.data, edit: false }));
  }

  show() {
    let { book: { title, author, blurb, difficulty, keywords, lessons, book_image }} = this.state;
    return (
      <Container>
        <br />
        <Grid>
          <Grid.Column width={5}>
            <h1>{title}</h1>
            <h3>Author: {author}</h3>
            <h3>Reading Level: {difficulty}</h3>
            <h3>Recommended with this Prescription:</h3>
            <Card.Group itemsPerRow={2}>
              <Card raised image={"https://wordpresstours.com/wp-content/uploads/2017/09/coming-soon.png"} />
              <Card raised image={"https://wordpresstours.com/wp-content/uploads/2017/09/coming-soon.png"} />
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={5}>
            <Image src={book_image} height="400"/>
          </Grid.Column>
          <Grid.Column width={6} celled='internally'>
            <Grid.Row>
              <h1>Reviews</h1>
              <br />
            </Grid.Row>
            <Grid.Row>
              <h3>Coming Soon!</h3>
              <p>Someone's great review here</p>
              <br />
              <hr />
            </Grid.Row>
            <Grid.Row>
              <h3>Coming Soon!</h3>
              <p>Someone's great review here</p>
              <br />
              <hr />
            </Grid.Row>
            <Grid.Row>
              <h3>Coming Soon!</h3>
              <p>Someone's great review here</p>
              <br />
              <hr />
            </Grid.Row>
          </Grid.Column>
            <p style={{ whiteSpace: 'pre-wrap', fontSize: 15 }}>{blurb}</p>
        </Grid>
        <Header as='h5' disabled>Keywords: {keywords} </Header> <br />
        <Header as='h5' disabled>Symptoms: {lessons}</Header> <br />
      </Container>
    )
  }
  
  
  edit() {
    return <ChangeForm {...this.state.book} submit={this.submit} />
  }
  
  render() {
    let { edit } = this.state;
    return (
      <Container>
        {edit ? this.edit() : this.show()}
        <Button color="green" onClick={this.toggleEdit}>{edit ? 'Cancel' : 'Edit'}</Button>
        <Button color="blue">Like</Button>
      <p class="invisible"> What a great book! </p>
      </Container>
    )
  }
}

export default Book;
