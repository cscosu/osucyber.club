import React, { Component } from "react";
import { Container, Image, Grid, Segment, Responsive } from "semantic-ui-react";
import { Parallax } from "react-parallax";
import "semantic-ui-css/semantic.min.css";

const cppImage = "/img/c++.jpg";

class About extends Component {
  render() {
    return (
      <Parallax bgImage={cppImage} strength={500}>
        <Responsive {...Responsive.onlyMobile}>
          <Container style={{ height: "600px" }} id="about">
            <Container
              as={Segment}
              style={{ marginTop: "20%", padding: "5%" }}
              color="red"
            >
              <Grid stackable divided>
                <Grid.Column width={5} verticalAlign="middle">
                  <Image size="tiny" src="/img/logo.png" centered />
                </Grid.Column>
                <Grid.Column
                  width={11}
                  style={{
                    paddingLeft: "5%",
                    fontSize: "1.2em",
                    textAlign: "center"
                  }}
                  verticalAlign="middle"
                >
                  <h3>About us</h3>
                  <p>
                    We do everything from hacking to snacking. Our purpose is to
                    promote cyber and information security across the university
                    community, teach different tools used in both defensive and
                    offensive cyber security, and represent Ohio State at
                    Capture the Flag events across the nation.
                  </p>
                  <p>
                    <b>Weekly meetings: </b>
                    7:00 - 8:00PM in JR 270
                    <br />
                  </p>
                </Grid.Column>
              </Grid>
            </Container>
          </Container>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Container style={{ height: "600px" }} id="about">
            <Container as={Segment} style={{ top: "200px" }} color="red">
              <Grid stackable divided>
                <Grid.Column width={5} verticalAlign="middle">
                  <Image size="small" src="/img/logo.png" centered />
                </Grid.Column>
                <Grid.Column
                  width={11}
                  style={{ paddingLeft: "5%", fontSize: "1.2em" }}
                  verticalAlign="middle"
                >
                  <h3>About us</h3>
                  <p>
                    We do everything from hacking to snacking. Our purpose is to
                    promote cyber and information security across the university
                    community, teach different tools used in both defensive and
                    offensive cyber security, and represent Ohio State at
                    Capture the Flag events across the nation.
                  </p>
                  <p>
                    <b>Weekly meetings: </b>
                    7:00 - 8:00PM in JR 270
                    <br />
                  </p>
                  <p>
                    Join our <a href="http://slack.osucyber.club">Slack</a> channel to stay in the loop!
                  </p>
                </Grid.Column>
              </Grid>
            </Container>
          </Container>
        </Responsive>
      </Parallax>
    );
  }
}

export default About;
