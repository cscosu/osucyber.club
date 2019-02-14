import React, { Component } from "react";
import {
  Image,
  Icon,
  Container,
  Header,
  Card,
  Button
} from "semantic-ui-react";
import board from "./board.js";

class Board extends Component {
  // To add more board just set an initial actionKey for them
  state = {
    ct: "info",
    iq: "info",
    da: "info",
    nk: "info"
  };

  buttons = boardMember => {
    return (
      <Button.Group size="mini">
        <Button
          basic
          color={this.state[boardMember.actionKey] === "info" ? "red" : "grey"}
          name="info"
          id={boardMember.actionKey}
          active={this.state[boardMember.actionKey] === "info"}
          onClick={this.handleItemClick}
        >
          info
        </Button>
        <Button.Or />
        <Button
          basic
          color={this.state[boardMember.actionKey] === "bio" ? "red" : "grey"}
          name="bio"
          id={boardMember.actionKey}
          active={this.state[boardMember.actionKey] === "bio"}
          onClick={this.handleItemClick}
        >
          bio
        </Button>
        <Button.Or />
        <Button
          basic
          color={this.state[boardMember.actionKey] === "quote" ? "red" : "grey"}
          name="quote"
          id={boardMember.actionKey}
          active={this.state[boardMember.actionKey] === "quote"}
          onClick={this.handleItemClick}
        >
          quote
        </Button>
      </Button.Group>
    );
  };

  infoBioQuote = boardMember => {
    switch (this.state[boardMember.actionKey]) {
      case "info":
        return (
          <div className="info">
            <div>
              {/* Each social network is checked before rendering an icon*/}
              {boardMember.facebook ? (
                <a href={boardMember.facebook}>
                  <Icon circular color="black" name="facebook f" />
                </a>
              ) : null}
              {boardMember.instagram ? (
                <a href={boardMember.instagram}>
                  <Icon circular color="red" name="instagram" />
                </a>
              ) : null}
              {boardMember.twitter ? (
                <a href={boardMember.twitter}>
                  <Icon circular inverted name="twitter" />
                </a>
              ) : null}
              {boardMember.github ? (
                <a href={boardMember.github}>
                  <Icon circular inverted color="grey" name="github" />
                </a>
              ) : null}
              {boardMember.linkedin ? (
                <a href={boardMember.linkedin}>
                  <Icon circular color="red" inverted name="linkedin" />
                </a>
              ) : null}
              {boardMember.email ? (
                <a href={"mailto:" + boardMember.email}>
                  <Icon circular color="grey" name="mail" />
                </a>
              ) : null}
            </div>
          </div>
        );
      case "bio":
        return <p className="bio">{boardMember.bio}</p>;
      case "quote":
        return <p className="quote">{boardMember.quote}</p>;
      default:
        return null;
    }
  };

  // Sets the individual board state to the correct menu item
  handleItemClick = (e, { name }) => {
    this.setState({ [e.target.id]: name });
  };

  render() {
    return (
      <Container
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          textAlign: "center"
        }}
        id="board"
      >
        <Header as="h1" style={{ textAlign: "center" }}>
          Board
        </Header>
        <Card.Group stackable centered itemsPerRow={4}>
          {board.map((boardMember, key) => {
            return (
              <Card
                key={key}
                color="red"
                style={{ marginTop: "5%", marginBottom: "5%" }}
              >
                <Image size="large" src={boardMember.image} />
                {this.buttons(boardMember)}
                <Card.Content style={{ fontSize: "1.3em" }}>
                  <Card.Header className="name">{boardMember.name}</Card.Header>
                  <Card.Meta className="role" style={{ paddingTop: "2%" }}>
                    {boardMember.role}
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra style={{ color: "#000" }}>
                  {this.infoBioQuote(boardMember)}
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Container>
    );
  }
}

export default Board;
