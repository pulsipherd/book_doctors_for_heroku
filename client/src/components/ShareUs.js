import React, { Component } from 'react';
import SocialShare from 'react-simple-social';

class ShareUs extends Component {
  render() {
    return (
    <div>
      <SocialShare url="http://bookdoctors.herokuapp.com/" title="BookDoctors" sites={["facebook", "twitter", "reddit", "linkedin", "email"]} color="white" width="20" height="20" theme="roundedsquare" />
    </div>)
  }
}

export default ShareUs;