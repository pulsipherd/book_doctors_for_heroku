import React from 'react';
import { Form, Container, Button } from 'semantic-ui-react';

class ChangeForm extends React.Component {
  defaultValues = {
    title: "Main Title: Subtitle, too, if it has one",
    author: "Author's First and Last Name",
    blurb:
      "You can copy it from Amazon, GoodReads, or anywhere else, if you would like. Just make sure you give credit where it's due! (for example, '... according to GoodReads')",
    difficulty: "",
    keywords: "Where's it set? What are some of the things that happen in it?",
    lessons:
      "What are some of the struggles people have that this could help with?"
  };
  state = { ...this.dafaultValues };

  componentDidMount() {
    if (this.props.id) this.setState({ ...this.props });
  }

  handleSubmit = e => {
    e.preventDefault();
    let book = { ...this.state };
    this.props.submit(book);
    this.setState({ ...this.defaultValues });
    console.log("Submitted correctly");
  };

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
          learn the lesson of the novel. Life-changing and well written
          nonfiction books are welcome, too, though.{" "}
        </p>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input id="title" placeholder="title" value={title} onChange={this.handleChange} required /> <br />
          <label>Author</label>
          <input id="author" placeholder="author" value={author} onChange={this.handleChange} required />
          <br />
          <label>
            Blurb <small>
              (this can by copied and pasted from any number of
              sources--Amazon, Goodreads, LibraryThing, etc--just make sure
              to include your source at the end!)
            </small>
          </label>
          <Form.TextArea width="100%" rows="8" id="blurb" type="html" placeholder="blurb" value={blurb} onChange={this.handleChange} required />
          <br />
          <label>Difficulty </label>
          <select id="difficulty" placeholder="difficulty" value={difficulty} defaultValue="young adult" onChange={this.handleChange} required>
            <option>young adult</option>
            <option>child</option>
            <option>toddler</option>
            <option>adult</option>
            <option>college</option>
            <option>professional</option>
          </select>
          <br />
          <label>
            Keywords <small>
              (these should be the actual topic of the book. If it's a
              novel, maybe the setting, or some of the activities that
              happen. Just anything that someone might want to look up for a
              friend who's interested in that sort of thing)
            </small>
          </label>
          <input id="keywords" placeholder="keywords" value={keywords} onChange={this.handleChange} required />
          <br />
          <label>Symptoms</label>
          <input id="lessons" placeholder="lessons" value={lessons} onChange={this.handleChange} required />
          <br />
          <label>
            URL of cover image <small>
              {" "}
              Soon we'll be pulling our cover images from the wonderful
              LibraryThing website, but until we get that up and running, go
              ahead and find an image of the cover somewhere online and
              paste the URL of the image here. Make sure to double check to
              make sure only the image itself pops up, by pasting the url
              into your browser first. It should take you to a page with
              only the image of the cover on it. Also, you should spend some
              time poking around the site where you find the image so that
              they get some benefit from our pulling the image from their
              servers.
            </small>
          </label>
          <input id="book_image" value={book_image} onChange={this.handleChange} />
          <br />
          <Button color="yellow" onClick={this.submit}>
            Save My Book!
          </Button>
          <br />
        </form>
        {/* <Button
          color="red"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete your book?")) {
              this.deleteBook();
            }
          }}
        >
          Delete my book.
        </Button>{" "} */}
      </Container>;
  }
}

export default ChangeForm;