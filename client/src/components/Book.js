import React from 'react';
import axios from 'axios';
import ChangeForm from './ChangeForm';
import { Header, Grid } from "semantic-ui-react"; 

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
    let { book: { title, author, blurb, difficulty, keywords, lessons }} = this.state;
    return (
      <div>
        <Grid>
          <h1>{title}</h1>
          <h3>{author}</h3>
          <p>{blurb}</p>
          <Header as='h4'>Difficulty: {difficulty}</Header>
          <Header as='h5' disabled>Keywords: {keywords} | Lessons: {lessons}</Header>
        </Grid>
      </div>
    )
  }
  

  edit() {
    return <ChangeForm {...this.state.book} submit={this.submit} />
  }

  render() {
    let { edit } = this.state;
    return (
      <div>
        {edit ? this.edit() : this.show()}
        <button onClick={this.toggleEdit}>{edit ? 'Cancel' : 'Edit'}</button>
      </div>
    )
  }
}

export default Book;
