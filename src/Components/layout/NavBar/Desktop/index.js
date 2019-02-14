import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Dropdown, Segment, Menu, Image, Grid } from "semantic-ui-react";

class NavBarDesktop extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  onMouseOver = e => (e.target.style.backgroundColor = "#F0F0F0");
  onMouseOut = e => (e.target.style.backgroundColor = "#FFF");

  render() {
    console.log(this.props);
    return (
      <Segment
        color="black"
        inverted
        style={{ zIndex: "100", borderRadius: "0em", marginBottom: "0" }}
      >
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={7}>
              <Image src="/img/words_white.png" size="small" href="/" />
            </Grid.Column>
            <Grid.Column width={7}>
              <Menu compact inverted floated="right" color="black">
                <Menu.Menu>
                  {this.props.links.map(
                    link =>
                      link.href ? (
                        <Menu.Item
                          key={link.key}
                          as={Link}
                          to={link.href}
                          smooth
                          scroll={el =>
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "center"
                            })
                          }
                          content={link.content}
                          style={{ fontSize: "1.2em" }}
                          active={this.state.activeItem === link.key}
                          onClick={this.handleItemClick.bind(this)}
                        />
                      ) : (
                        <Dropdown
                          item
                          text={link.content}
                          key={link.key}
                          style={{ fontSize: "1.2em" }}
                        >
                          <Dropdown.Menu style={{ backgroundColor: "#FFF" }}>
                            {link.children.map((c, key) => (
                              <Link smooth key={key} to={c.href}>
                                <Dropdown.Item
                                  onMouseOver={this.onMouseOver.bind(this)}
                                  onMouseOut={this.onMouseOut.bind(this)}
                                  style={{ color: "#000" }}
                                >
                                  {c.content}
                                </Dropdown.Item>
                              </Link>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      )
                  )}
                </Menu.Menu>
              </Menu>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default NavBarDesktop;
