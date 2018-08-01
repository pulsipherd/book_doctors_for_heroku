import React from 'react';
import axios from 'axios';
import { Form, Container } from 'semantic-ui-react';

class ChangeForm extends React.Component {
  defaultValues = {
    title: "Main Title: Subtitle, too, if it has one",
    author: "Author's First and Last Name",
    blurb:
      "You can copy it from Amazon, GoodReads, or anywhere else, if you'd like. Just make sure you give credit where it's due! ('... according to http://...",
    difficulty: "Children's, Young Adult, College?",
    keywords: "Where's it set? What are some of the topics?",
    lessons:
      "What are some of the struggles people have that this could help with?"
  };
  state = { ...this.dafaultValues };

  componentDidMount() {
    if (this.props.id) this.setState({ ...this.props });
  }

  submit = (book) => {
    let { books } = this.state
    axios.post('/api/books', { book })
      .then(res => this.setState({books: [res.data, ...books ]
      }))
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
    return (
      <Container>
        <p>
          What book do you think could help other people in some way? We're
          mostly interested in novels, as fiction can produce such a cathartic
          experience enabling readers to forget themselves as they learn the
          lesson of the novel. Life-changing and well written nonfiction books
          are welcome, too, though.{" "}
        </p>
        <form class="ui form" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            id="title"
            placeholder="title"
            value={title}
            onChange={this.handleChange}
            required
          />{" "}
          <br />
          <label>Author</label>
          <input
            id="author"
            placeholder="author"
            value={author}
            onChange={this.handleChange}
            required
          />
          <br />
          <label>
            Blurb{" "}
            <small>
              (this can by copied and pasted from any number of sources--Amazon,
              Goodreads, LibraryThing, etc--just make sure to include your
              source at the end!)
            </small>
          </label>
          <Form.TextArea
            width="100%"
            rows="8"
            id="blurb"
            type="html"
            placeholder="blurb"
            value={blurb}
            onChange={this.handleChange}
            required
          />
          <br />
          <label>
            Difficulty{" "}
            <small>
              (This project is intended for readers of all ages, and eventually
              we'll probably settle on set categories for reading levels here.
              For now, you can categorize your book however you'd like--infant,
              toddler, young adult, high school, college, professional, etc)
            </small>
          </label>
          <input
            id="difficulty"
            placeholder="difficulty"
            value={difficulty}
            onChange={this.handleChange}
            required
          />
          <br />
          <label>
            Keywords{" "}
            <small>
              (these should be the actual topic of the book. If it's a novel,
              maybe the setting, or some of the activities that happen. Just
              anything that someone might want to look up for a friend who's
              interested in that sort of thing)
            </small>
          </label>
          <input
            id="keywords"
            placeholder="keywords"
            value={keywords}
            onChange={this.handleChange}
            required
          />
          <br />
          <label>Symptoms</label>
          <input
            id="lessons"
            placeholder="lessons"
            value={lessons}
            onChange={this.handleChange}
            required
          />
          <br />
          <label>
            URL of cover image{" "}
            <small>
              {" "}
              Soon we'll be pulling our cover images from the wonderful
              LibraryThing website, but until we get that up and running, go
              ahead and find an image of the cover somewhere online and paste
              the URL of the image here. Make sure to double check to make sure
              only the image itself pops up, by pasting the url into your
              browser first. It should take you to a page with only the image of
              the cover on it. Also, you should spend some time poking around
              the site where you find the image so that they get some benefit
              from our pulling the image from their servers.
            </small>
          </label>
          <input
            id="book_image"
            value={book_image}
            onChange={this.handleChange}
          />
          <button onClick={this.submit}>Change my book!</button>
        </form>
      </Container>
    );
  }
}

export default ChangeForm;