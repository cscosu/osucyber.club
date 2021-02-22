import React, { Component } from "react";
import { Container, Header, Grid, Image, List } from "semantic-ui-react";

export default class Sponsor extends Component {
  render() {
    return (
      <Container
        text
        style={{ marginTop: "5%", marginBottom: "5%" }}
        id="sponsor"
      >
        <Header as="h1" style={{ textAlign: "center" }}>
          Sponsor
        </Header>
        <p style={{ paddingTop: "5%" }}>
          Thanks for your interest in supporting our club! We rely on corporate and individual donations to pay for...
        </p>
	<ul>
	    <li>Infrastructure for CTF events</li>
	    <li>Prizes for CTF events</li>
	    <li>Keeping this website up</li>
	    <li>... as well as pizza for a few meetings a year!</li>
	</ul>
        <p style={{ paddingTop: "5%"}}>
            Depending on the level of future support, we are hoping the club can obtain a physical space and
	    purchase a variety of hardware hacking tools, IoT devices, and more.
	</p>

        <Header as="h2" style={{ textAlign: "center" }}>
          Current Sponsors
        </Header>
	<Grid stackable>
	  <Grid.Column width={8}>
	    <Image centered src="img/sponsors/battelle.svg" size="large" />
	  </Grid.Column>
	  <Grid.Column width={8}>
	    <Image centered src="img/sponsors/northrop_grumman.svg" size="large" />
	  </Grid.Column>
	</Grid>

        <br />
        <Grid divided stackable>
          <Grid.Column width={8}>
            <div>
            	<h2>Possible Sponsorship Benefits</h2>
	        <p>Contact us at info@osucyber.club for more information</p>
		<ul>
		    <li>Recruiting opportunities during club meetings</li>
		    <li>Access to club resume bank</li>
	            <li>Logo on our website</li>
	            <li>Logo on club apparel (may not be available every semester)</li>
		    <li>Networking / Recruiting opportunities at future CTF events (maybe someday in-person!)</li>
		</ul>
	    </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div>
            	<h2>How to give</h2>
	        <ul>
	            <li>Option 1: Donate via our Ohio State fund, "The Cyber Security Club Fund", fund #316070. <a href="https://www.giveto.osu.edu/makeagift/?Source_Code=OSUCYBER_WEBSITE&fund=316070">Donate Now.</a> Please contact us before donating if you desire specific sponsorship benefits.</li>
	            <li>Option 2: Contact us at <a href="mailto:info@osucyber.club">info@osucyber.club</a>.</li>
	        </ul>
	    </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
