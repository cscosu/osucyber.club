import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export default class Schedule extends Component {
  render() {
    return (
      <Container
        text
        style={{ marginTop: "5%", marginBottom: "5%" }}
        id="schedule"
      >
        <Header as="h1" style={{ textAlign: "center" }}>
          Schedule
        </Header>
        <br />
        <p style={{ paddingTop: "5%", textAlign: "center" }}>
          <iframe title="clubCalendar" src="https://calendar.google.com/calendar/embed?src=cscosu%40gmail.com&ctz=America%2FNew_York" style={{border: "0", width: "100%", height: "400px"}}></iframe>
        </p>
      </Container>
    );
  }
}
