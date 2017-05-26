import React, { Component } from "react";
// import Header from './Header';

import "../node_modules/semantic-ui-css/semantic.min.css";
import NewFlowWidget from "./NewFlowWidget";
import Flows from "./Flows";
import { Grid, Segment, Image } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Column width={7}>
            <Segment inverted>
              <Grid.Row>
                <NewFlowWidget />
              </Grid.Row>
              <Grid.Row>
                <Flows />
              </Grid.Row>
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Image
              fluid
              src="https://semantic-ui.com/images/wireframe/paragraph.png"
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
