import React, { Component } from "react";
import { Container, Image, Icon, Responsive } from "semantic-ui-react";
import Particles from "./Particles";
import About from "../About";
import Board from "../Board";
import Tools from "../Tools";
import Contact from "../Contact";
import "semantic-ui-css/semantic.min.css";

const socialStuff = () => {
  return (
    <Container>
      <Responsive {...Responsive.onlyMobile}>
        <a href="#" style={{ color: "#BB0300" }}>
          <Icon name="slack" size="big" />
        </a>
        <a href="#" style={{ color: "grey" }}>
          <Icon name="paper plane" size="big" />
        </a>
        <a href="#" style={{ color: "black" }}>
          <Icon name="mail" size="big" />
        </a>
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <a href="#" style={{ color: "#BB0300" }}>
          <Icon name="slack" size="huge" link />
        </a>
        <a href="#" style={{ color: "grey" }}>
          <Icon name="paper plane" size="huge" link />
        </a>
        <a href="#" style={{ color: "black" }}>
          <Icon name="mail" size="huge" link />
        </a>
      </Responsive>
    </Container>
  );
};

const robotText = () => {
  return (
    <Container>
      <Responsive {...Responsive.onlyMobile}>
        <Image
          size="massive"
          src="/img/words.png"
          verticalAlign="middle"
          style={{
            paddingTop: "50%",
            paddingBottom: "10%",
            textAlign: "center"
          }}
        />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Image
          size="massive"
          src="/img/words.png"
          verticalAlign="middle"
          style={{
            padding: "10%",
            paddingTop: "12.5%",
            textAlign: "center"
          }}
        />
      </Responsive>
    </Container>
  );
};

const cppImage = "/img/c++.jpg";

const parallaxStyles = {
  background: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      home: []
    };
  }
  render() {
    return (
      <div className="home">
        <Container
          style={{
            textAlign: "center",
            height: "95vh"
          }}
        >
          <Particles />
          {robotText()}
          {socialStuff()}
        </Container>
        <About />
        <Board />
        <Tools />
        <Contact />
      </div>
    );
  }
}

export default Home;
