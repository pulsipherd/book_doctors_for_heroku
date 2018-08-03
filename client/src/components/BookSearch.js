import React, { Component } from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';

class BookSearch extends Component {
  render() {
    return <div>
        <br />
        <Grid>
          <Grid.Column width={4}>
            <label className="right">Search for keywords</label> <br />
            <label className="right">Search for symptoms </label>
          </Grid.Column>
          <Grid.Column width={4}>
            <form class="form" onSubmit={this.handleSubmit}>
              <input id="keywordsearch" placeholder="Coming Soon!" /> <br />
              <input id="topicsearch" placeholder="Coming Soon!" />
            </form>
          </Grid.Column>
          <Grid.Column width={4}>
            <label className="right">
              Select reading level <small>(Coming soon!)</small>
            </label>
          </Grid.Column>
          <Grid.Column width={4}>
            <select>
              <option>infant</option>
              <option>toddler</option>
              <option selected>young adult</option>
              <option>high school</option>
              <option>college</option>
              <option>professional</option>
            </select>
          </Grid.Column>
        </Grid>
      </div>;
  }
}

export default BookSearch;