import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Icon, Menu, Sidebar, Segment, Item } from "semantic-ui-react";

class NavBarMobile extends Component {
  state = {
    visible: false
  };
  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    return (
      <div>
        <Segment
          inverted
          color={this.state.visible ? "black" : "red"}
          onClick={this.handleButtonClick}
          style={{
            zIndex: "100",
            transition: "background-color .5s",
            margin: "0",
            textAlign: "center",
            borderRadius: "0em",
            height: "50px",
            borderTop: "2px solid #DB2828"
          }}
        >
          <Menu secondary compact>
            <Icon
              color={this.state.visible ? "red" : null}
              style={{ transition: "background-color .5s" }}
              size="large"
              inverted
              name="sidebar"
              fitted
            />
          </Menu>
        </Segment>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            visible={this.state.visible}
            vertical
            direction="top"
            onHide={this.handleSidebarHide}
          >
            {this.props.links.map((link, key) => (
              <Item
                key={key}
                // http://docs.w3cub.com/dom/element/scrollintoview/
                scroll={el =>
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  })
                }
                onClick={this.handleSidebarHide}
                as={Link}
                to={link.href}
              >
                {link.content}
              </Item>
            ))}
          </Sidebar>
          <Sidebar.Pusher
            style={
              this.state.visible
                ? { transition: "height .5s", height: "100vh" }
                : { transition: "height .5s", height: "0vh" }
            }
            dimmed={this.state.visible}
          />
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default NavBarMobile;
