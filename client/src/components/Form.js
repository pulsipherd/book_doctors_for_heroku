import React from 'react';

class Form extends React.Component {
  defaultValues = {
    title: "Main Title: Subtitle, too, if it has one",
    author: "Author's First and Last Name",
    blurb: "You can copy it from Amazon, GoodReads, or anywhere else, if you'd like.", 
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
    let { title, author, blurb, difficulty, keywords, lessons } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="title"
          placeholder="title"
          value={title}
          onChange={this.handleChange}
          required
          /> <br />
        <input
          id="author"
          placeholder="author"
          value={author}
          onChange={this.handleChange}
          required
        /><br />
        <input
          id="blurb"
          placeholder="blurb"
          value={blurb}
          onChange={this.handleChange}
          required
        /><br />
        <input
          id="difficulty"
          placeholder="difficulty"
          value={difficulty}
          onChange={this.handleChange}
          required
        /><br />
        <input
          id="keywords"
          placeholder="keywords"
          value={keywords}
          onChange={this.handleChange}
          required
        /><br />
        <input
          id="lessons"
          placeholder="lessons"
          value={lessons}
          onChange={this.handleChange}
          required
        /><br />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;