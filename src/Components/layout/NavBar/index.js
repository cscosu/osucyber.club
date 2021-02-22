import React, { Component } from "react";
import { Container, Responsive } from "semantic-ui-react";
import NavBarMobile from "./Mobile/index";
import NavBarDesktop from "./Desktop/index";

// Array of objects for all the links to render them appropriately for Desktop and Mobile
// A link with children is for rendering a drop down for Desktop
let links = [
  {
    content: "Home",
    key: "home",
    href: "/"
  },
  {
    content: "About",
    key: "about",
    href: "/#about"
  },
  {
    content: "Board",
    key: "board",
    href: "/#board"
  },
  {
    content: "Schedule",
    key: "schedule",
    href: "/#schedule"
  },
  {
    content: "CTF Tools",
    key: "tools",
    href: "/#tools"
  },
  {
    content: "Contact",
    key: "contact",
    href: "/#contact"
  },
  {
    content: "Sponsor / Donate",
    key: "sponsor",
    href: "/#sponsor"
  },
  {
    content: "Wiki",
    key: "wiki",
    href: "//wiki.osucyber.club",
    external: "truthy"
  }
];

// This adds any object with an href to a new array because
// mobile doesn't have a dropdown for children.
let mobileLinks = [];
links.forEach(link => {
  if (link.href) {
    mobileLinks.push(link);
  } else {
    link.children.forEach(c => {
      mobileLinks.push(c);
    });
  }
});

const NavBarChildren = ({ children }) => (
  <Container fluid> {children} </Container>
);

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      activeItem: "home"
    };
  }

  handlePusher = () => {
    const { visible } = this.state;
    if (visible)
      this.setState({
        visible: false
      });
  };

  render() {
    const { visible } = this.state;
    const { children } = this.props;

    return (
      <div className="nav">
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            visible={visible}
            links={mobileLinks.map(l => {
              return l;
            })}
          >
            <NavBarChildren> {children} </NavBarChildren>{" "}
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop links={links} />
          <NavBarChildren> {children} </NavBarChildren>{" "}
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
