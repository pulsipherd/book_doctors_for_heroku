import React from 'react';
import { Form } from 'semantic-ui-react';

class ChangeForm extends React.Component {
  defaultValues = {
    title: "Main Title: Subtitle, too, if it has one",
    author: "Author's First and Last Name",
    blurb: "You can copy it from Amazon, GoodReads, or anywhere else, if you'd like. Just make sure you give credit where it's due! ('... according to http://...", 
  difficulty: "Children's, Young Adult, College?",
    keywords: "Where's it set? What are some of the topics?",
    lessons: "What are some of the struggles people have that this could help with?",
  }
  state = { ...this.dafaultValues }

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let book = { ...this.state }
    this.props.submit(book)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value } } = e;
    this.setState({ [id]: value })
  }

  render() {
    let { title, author, blurb, difficulty, keywords, lessons, book_image } = this.state;
    return (
      <form class="ui form" onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input
          id="title"
          placeholder="title"
          value={title}
          onChange={this.handleChange}
          required
          /> <br />
        <label>Author</label>
        <input
          id="author"
          placeholder="author"
          value={author}
          onChange={this.handleChange}
          required
        /><br />
        <label>Teaser</label>
        <Form.TextArea
          width="100%"
          rows="8"
          id="blurb"
          type="textBox"
          placeholder="blurb"
          value={blurb}
          onChange={this.handleChange}
          required
        /><br />
        <label>Difficulty</label>
        <input
          id="difficulty"
          placeholder="difficulty"
          value={difficulty}
          onChange={this.handleChange}
          required
        /><br />
        <label>Keywords</label>
        <input
          id="keywords"
          placeholder="keywords"
          value={keywords}
          onChange={this.handleChange}
          required
        /><br />
        <label>Lessons</label>
        <input
          id="lessons"
          placeholder="lessons"
          value={lessons}
          onChange={this.handleChange}
          required
        /><br />
        <label>URL of cover image </label>
        <input
          type="url"
          id="book_image"
          value={book_image}
          onChange={this.handleChange}
          accept="url"
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default ChangeForm;