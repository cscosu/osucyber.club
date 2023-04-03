import React, { Component } from "react";
import { Container, Image, Icon, Responsive } from "semantic-ui-react";
import Particles from "./Particles";
import About from "../About";
import Board from "../Board";
import Schedule from "../Schedule";
import Tools from "../Tools";
import Contact from "../Contact";
import Sponsor from "../Sponsor";
import "semantic-ui-css/semantic.min.css";

const socialStuff = () => {
  return (
    <Container>
      <Responsive {...Responsive.onlyMobile}>
        <a href="https://discord.osucyber.club" style={{ color: "#BB0300" }}>
	  <button class="ui button red"><Icon name="discord" style={{ color: "white" }} />Join our Discord</button>
        </a>
        <a href="mailto:info@osucyber.club" style={{ color: "silver" }}>
          <button class="ui button red"><Icon name="paper plane" style={{ color: "white" }} />Send us an email</button>
        </a>
        <a href="http://mailinglist.osucyber.club">
          <button class="ui button red"><Icon name="mail" style={{ color: "white" }} />Join our Mailing List</button>
        </a>
	<a href="https://wiki.osucyber.club/Bootcamp-CTF/Welcome">
          <button class="ui button blue"><Icon name="flag" style={{ color: "white" }} />Bootcamp CTF</button>
	</a>
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <a href="https://discord.osucyber.club" style={{ color: "#BB0300" }}>
          <button class="huge ui button red"><Icon name="discord" style={{ color: "white" }} />Join our Discord</button>
        </a>
        <a href="mailto:info@osucyber.club" style={{ color: "silver" }}>
          <button class="huge ui button red"><Icon name="paper plane" style={{ color: "white" }} />Send us an email</button>
        </a>
        <a href="http://mailinglist.osucyber.club">
          <button class="huge ui button red"><Icon name="mail" style={{ color: "white" }} />Join our Mailing List</button>
        </a>
	<br />
	<a href="https://wiki.osucyber.club/Bootcamp-CTF/Welcome">
          <button style={{ "margin-top": "10px" }} class="huge ui button blue"><Icon name="flag" style={{ color: "white" }} />Bootcamp CTF</button>
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
          src="/img/new_words_black_red.png"
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
          src="/img/new_words_black_red.png"
          verticalAlign="middle"
          style={{
            padding: "0%",
            paddingBottom: "10%",
            paddingTop: "17.5%",
            textAlign: "center"
          }}
        />
      </Responsive>
    </Container>
  );
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
        <Schedule />
        <Tools />
        <Contact />
	<Sponsor />
      </div>
    );
  }
}

export default Home;
