import React, { Component } from "react";
import { Container, Image, Divider, Icon, Responsive } from "semantic-ui-react";
import desktopParams from "./Desktop";
import mobileParams from "./Mobile";
import Particles from "react-particles-js";

const OSUParticles = () => {
  return (
    <Container>
      <Responsive {...Responsive.onlyMobile}>
        <Particles
          style={{
            zIndex: "-1",
            position: "absolute",
            left: "0",
            right: "0",
            top: "auto",
            bottom: "auto",
            backgroundImage: `linear-gradient(to bottom, #000 0%, #FFF 30%, #000 85%, #BB0300 100%)`
          }}
          params={mobileParams}
        />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Particles
          style={{
            zIndex: "-1",
            position: "absolute",
            left: "0",
            right: "0",
            top: "auto",
            bottom: "auto",
            backgroundImage: `linear-gradient(to bottom, #BB0300 0%, #000 10%, #FFF 40%, #000 80%, #BB0300 100%)`
          }}
          params={desktopParams}
        />
      </Responsive>
    </Container>
  );
};

export default OSUParticles;
