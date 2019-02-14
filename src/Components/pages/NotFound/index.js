import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export default class NotFound extends Component {
  render() {
    return (
      <Container
        text
        textAlign="center"
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <Header as="h1">404 - Page Not Found ¯\_(ツ)_/¯</Header>
        <p>The requested page does not exist.</p>
      </Container>
    );
  }
}
