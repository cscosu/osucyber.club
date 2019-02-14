import React, { Component } from "react";
import { Container, Header, Image, Segment } from "semantic-ui-react";
import StackGrid, { transitions } from "react-stack-grid";
import { Parallax } from "react-parallax";
import sponsors from "./software.js";
const { helix } = transitions;

const binaryImage = "/img/binary.jpg";

class Tools extends Component {
  render() {
    return (
      <Parallax bgImage={binaryImage} strength={500}>
        <Header
          style={{
            paddingTop: "5%",
            textAlign: "center",
            marginBottom: "5%",
            color: "#FFF"
          }}
          as="h1"
        >
          CTF Tools
        </Header>
        <Container
          style={{
            marginTop: "5%",
            marginBottom: "5%"
          }}
          id="tools"
        >
          <StackGrid
            gutterWidth={30}
            gutterHeight={30}
            columnWidth={200}
            appear={helix.appear}
            appeared={helix.appeared}
            enter={helix.enter}
            entered={helix.entered}
            leaved={helix.leaved}
            monitorImagesLoaded
          >
            {sponsors.map((sponsor, key) => {
              return (
                <Segment color="red" key={key}>
                  <a href={sponsor.href}>
                    <Image src={sponsor.logo} size="medium" />
                  </a>
                </Segment>
              );
            })}
          </StackGrid>
        </Container>
      </Parallax>
    );
  }
}

export default Tools;
