import React, { Component } from "react";
import { Container, Header, Grid, Image, List } from "semantic-ui-react";

export default class Contact extends Component {
  render() {
    return (
      <Container
        text
        style={{ marginTop: "5%", marginBottom: "5%" }}
        id="contact"
      >
        <Header as="h1" style={{ textAlign: "center" }}>
          Contact
        </Header>
        <p style={{ paddingTop: "5%", textAlign: "center" }}>
          Have a question or need further information? We would love to hear
          from you!
        </p>
        <br />
        <Grid divided stackable>
          <Grid.Column width={8}>
            <Image centered src="/img/logo.png" size="small" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={8}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <List size="large">
                <List.Item>
                  <List.Icon name="user" />
                  <List.Content>Kyle Westhaus, President</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>Columbus, OH</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="mail" />
                  <List.Content><a href="mailto:info@osucyber.club">info@osucyber.club</a></List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="phone" />
                  <List.Content>+1 614-688-3412</List.Content>
                </List.Item>
              </List>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
