import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import DesktopFooter from "./Desktop";
import MobileFooter from "./Mobile";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Responsive {...Responsive.onlyMobile}>
          <MobileFooter />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <DesktopFooter />
        </Responsive>
      </div>
    );
  }
}
