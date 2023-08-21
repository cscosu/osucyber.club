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
	<iframe title="clubCalendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&title=OSU%20Cyber%20Security%20Club%20Schedule&showTz=1&src=ZTFlN2Q0OTYwMWQ4MDQwNmY3ZjZjNTFhYTYzZDQ4NjM3NGY1OTI3MzljMjNhNTcwYjZmMzc1NmM0MDhlMTRjN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457" style={{border: "0", width: "100%", height: "400px"}}></iframe>
        </p>
      </Container>
    );
  }
}
