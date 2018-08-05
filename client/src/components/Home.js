import React from 'react';
import { Container, Image } from 'semantic-ui-react';
const Home = () => (
  <Container>
    <h1>The Book Doctors' Mission</h1>
    <p className="description"><Image src="https://images.unsplash.com/photo-1418833893919-fa9c83e8d69e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d4bfca5a12a4e6b5120b0b1a094f84f&auto=format&fit=crop&w=668&q=80" alt="Thoughtful Reader" floated="right" size="small" />Books are good for what ails us, giving us help to overcome challenges, heal heartaches, energize passions, or even therapeutically step out of our own often myopic lives to let us experience something different. </p>
    <aside className="pquote"> 
      <blockquote>
        <p>It is not true that we have only one life to live; if we can read, we can live as many more lives and as many kinds of lives as we wish. —S.I. Hayakawa</p>
      </blockquote>
    </aside>
    <p className="regular"><Image src="https://images.unsplash.com/photo-1521452936719-4aa3e3d3fe90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ce3c10c6fe19581aec5607b919f1ac0&auto=format&fit=crop&w=668&q=80" alt="Doctor diagnosing" floated="left" size="small" />Once a book doctor finds out what is ailing his or her patient, the challenge is to find the right book to prescribe. That's where the BookDoctors website comes in. Here all the successful book doctors of the world can come to share their go-to book prescriptions for the variety of ailments they routinely see. Then, aspiring book doctors can come to access the wealth of literary remedies prescribed by the best book doctors around!</p>
    <p className="regular">So come explore the prescriptions here and find the remedies for what ails your friends, or even yourself! Or even better, stay a while and add some of the books that have changed your life. Share some prescriptions--novels that have gotten you through tough places.</p>
    <p className="regular">NOTE: BookDoctors is still in its infancy, so many of our planned features don't work yet. Be patient, and in the coming weeks it will all take shape. What we need right now more than anything is a great database of books, so please do click that New Book link up above and add your favorite book!</p>
    <p className="regular">NOTE THE SECOND: If you registered for the site a few days ago and ran into errors in creating book entries (either no books created, or double entries) please clear your cache, which you can do by deleting your browsing history for the past week or so. This will force your browser to use our latest code rather than what it had stored in its cache. If you need help deleting your cache, feel free to <a href="mailto:pulsipherd@gmail.com">email me</a>.</p>
    <br />
  </Container>
)

export default Home;