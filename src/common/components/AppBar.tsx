import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Button } from "@material-ui/core";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

interface IState {
  sideBarVisible: boolean;
}

export default class AppBar extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sideBarVisible: false,
    };
  }

  toggleSideBar = (e: any) => {
    this.setState({ sideBarVisible: !this.state.sideBarVisible });
  };

  hideSideBar = () => {
    if (this.state.sideBarVisible) {
      this.setState({ sideBarVisible: false });
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          zIndex: 9,
          height: "60px",
          backgroundColor: "rgb(63 79 184)",
          flexDirection: "row",
          alignItems: "center",
          position: "sticky",
          top: 0,
        }}
      >
        <SideBar
          isVisible={this.state.sideBarVisible}
          toggleSideBar={this.toggleSideBar}
          hideSideBar={this.hideSideBar}
        />

        <Button onClick={this.toggleSideBar}>
          <MenuIcon />
        </Button>

        <Link to="/">
          <HomeIcon />
        </Link>

        {/* <Button style={{ position: "absolute", right: "20px" }} href="/login">
          {"Login"}
        </Button> */}
      </div>
    );
  }
}
