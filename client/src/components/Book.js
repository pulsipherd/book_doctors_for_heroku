import React from 'react';
import axios from 'axios';
import Form from './Form';

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
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{blurb}</p>
        <h4>{difficulty}</h4>
        <h5>{keywords} | {lessons}</h5>
      </div>
    )
  }
  

  edit() {
    return <Form {...this.state.product} submit={this.submit} />
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
