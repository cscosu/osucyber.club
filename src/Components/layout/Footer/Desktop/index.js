import React, { Component } from "react";
import { Grid, Segment, Icon } from "semantic-ui-react";

export default class DesktopFooter extends Component {
  render() {
    return (
      <Grid
        as={Segment}
        color="red"
        padded
        stackable
        style={{
          position: "absolute",
          left: "0%",
          right: "0%",
          height: "200px",
          color: "#FFF",
          marginBottom: "0px",
          backgroundColor: "#101010",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px"
        }}
      >
        <Grid.Row>
          <Grid.Column width={5} verticalAlign="middle">
            <p style={{ textAlign: "center", fontSize: "1.1em" }}>
              &copy; Cyber Security Club at The Ohio State University
            </p>
          </Grid.Column>
          <Grid.Column style={{ textAlign: "center" }} width={7} />
          <Grid.Column
            verticalAlign="middle"
            style={{ textAlign: "center" }}
            width={4}
          >
            <a style={{ color: "green" }} href="http://discord.osucyber.club">
              <Icon link name="discord" size="big" />
            </a>
            <a style={{ color: "white" }} href="mailto:info@osucyber.club">
              <Icon link name="paper plane" size="big" />
            </a>
            <a style={{ color: "#026FBF" }} href="http://mailinglist.osucyber.club">
              <Icon link name="mail" size="big" />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
