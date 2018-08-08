import React from 'react';
import axios from 'axios';
import { Form, Container, Button } from 'semantic-ui-react';

class CreateForm extends React.Component {
  
  state = {
      title: "",
      author: "",
      blurb: "",
      difficulty: "",
      keywords: "",
      lessons: ""
  };

  submit = () => {
    console.log("creating your book...")
    const book = { ...this.state }
    axios.post('/api/books', book)
      .then(res => this.props.history.push('/allbooks'))
  }

  handleChange = e => {
    let {
      target: { id, value }
    } = e;
    this.setState({ [id]: value });
  };

  render() {
    let {
      title,
      author,
      blurb,
      difficulty,
      keywords,
      lessons,
      book_image
    } = this.state;
    return <Container>
        <p>
          What book do you think could help other people in some way? We're
          mostly interested in novels, as fiction can produce such a
          cathartic experience enabling readers to forget themselves as they
          learn the lessons of the novel. Life-changing and well-written
          nonfiction books are welcome, too, though.{" "}
        </p>
        <form className="ui form" onSubmit={this.submit}>
          <label>Title</label>
          <input id="title" placeholder="title" value={title} onChange={this.handleChange} required /> <br />
          <label>Author</label>
          <input id="author" placeholder="author" value={author} onChange={this.handleChange} required />
          <br />
          <label>
            Blurb <small>
              (This can by copied and pasted from any number of
              sources--Amazon, Goodreads, LibraryThing, etc--just make sure
              to include your source at the end!)
            </small>
          </label>
          <Form.TextArea width="16" rows="8" id="blurb" type="html" placeholder="blurb" value={blurb} onChange={this.handleChange} required />
          <br />
          <label>Difficulty </label>
          <select id="difficulty" placeholder="difficulty" value={difficulty} onChange={this.handleChange} required>
            <option>infant</option>
            <option>toddler</option>
            <option>child</option>
            <option selected>young adult</option>
            <option>adult</option>
          </select>
          <br />
          <label>
            Keywords <small>
              (These should be the actual topics of the book. If it's a
              novel, maybe include the setting, or some of the activities
              that happen. You should just include anything that someone
              might want to look up for a friend who's interested in that
              sort of thing.)
            </small>
          </label>
          <input id="keywords" placeholder="keywords" value={keywords} onChange={this.handleChange} required />
          <br />
          <label>
            Symptoms <small>
              (These should be the symptoms exhibited by a person this book
              should be recommended to. They could be such things as
              loneliness, fear, being bullied, parent problems, friend
              problems, or anything else that this book can help with.)
            </small>
          </label>
          <input id="lessons" placeholder="lessons" value={lessons} onChange={this.handleChange} required />
          <br />
          <label>
            URL of cover image <small>
              {" "}
              (Soon we'll be pulling our cover images from the wonderful
              LibraryThing website, but until we get that up and running, go
              ahead and find an image of the cover somewhere online and
              paste the URL of the image here. Make sure to double check to
              make sure only the image itself pops up, by pasting the url
              into your browser first. It should take you to a page with
              only the image of the cover on it. Also, you should spend some
              time poking around the site where you find the image so that
              they get some benefit from our pulling the image from their
              servers.)
            </small>
          </label>
          <input id="book_image" value={book_image} onChange={this.handleChange} />
          <Button color="yellow">Add my book!</Button>
        </form>
        {" "}
      </Container>;
  }
}

export default CreateForm;