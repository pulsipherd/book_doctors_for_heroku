import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';
import ShareUs from './ShareUs'

class Footer extends Component {
  render() {
    return (
      <Segment basic className="footer" style={{ padding: '5em 0em' }}>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Articles</List.Item>
                <List.Item as='a'>Blog</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
             
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Get involved:</Header>
              <p style={{ color: "white" }}>Become a Book Doctor! <Link to='/register'>Register here</Link></p>
              <p style={{ color: "white" }}>Share us on facebook and social media.</p>
              <ShareUs />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
export default Footer;





