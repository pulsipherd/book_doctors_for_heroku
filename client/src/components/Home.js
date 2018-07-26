import React from 'react';
import { Container, Image } from 'semantic-ui-react';
const Home = () => (
  <Container>
    <h1>The Book Doctors' Mission</h1>
    <p className="description"><Image src="https://images.unsplash.com/photo-1418833893919-fa9c83e8d69e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d4bfca5a12a4e6b5120b0b1a094f84f&auto=format&fit=crop&w=668&q=80" alt="Thoughtful Reader" floated="right" size="small" />Books are good for what ails us, giving us help to overcome challenges, heal heartaches, energize passions, or even therapeutically step out of our own often myopic lives to let us experience something different. </p>
    <p className="regular"><Image src="https://images.unsplash.com/photo-1521452936719-4aa3e3d3fe90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ce3c10c6fe19581aec5607b919f1ac0&auto=format&fit=crop&w=668&q=80" alt="Doctor diagnosing" floated="left" size="small" />Once a book doctor finds out what is ailing his or her patient, the challenge is to find the right book to prescribe. That's where the Book Doctors website comes in. Here all the successful book doctors of the world can come to share their go-to book prescriptions for the variety of ailments they routinely see. Then, aspiring book doctors can come to access the wealth of literary remedies prescribed by the best book doctors around!</p>
    <p className="regular">So come explore the prescriptions here and find the remedies for what ails your friends or even yourself!</p>
    <br />
  </Container>
)

export default Home;