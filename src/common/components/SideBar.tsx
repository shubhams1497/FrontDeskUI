import * as React from "react";
// import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

interface IProps {
  isVisible: boolean;
  toggleSideBar: (e: any) => void;
  hideSideBar: () => void;
}

interface IState {
  isVisible: boolean;
}
class SideBar extends React.Component<
  IProps & RouteComponentProps<any>,
  IState
> {
  constructor(props: IProps & RouteComponentProps<any>) {
    super(props);
    this.state = {
      isVisible: props.isVisible,
    };

    props.history.listen(() => {
      // console.log(val);
      this.props.hideSideBar();
    });
  }
  componentWillReceiveProps(nextProps: IProps) {
    if (this.state.isVisible !== nextProps.isVisible) {
      this.setState({ isVisible: nextProps.isVisible });
    }

    //scroll to top when location changes
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {this.state.isVisible && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
            onClick={this.props.toggleSideBar}
          ></div>
        )}
        <SideBarContent visible={this.state.isVisible} />
      </div>
    );
  }
}

const SideBarContent = (props: any): JSX.Element => {
  const translateX = props.visible ? 0 : "-100%";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 11,
        width: "60vw",
        maxWidth: "300px",
        display: "flex",
        backgroundColor: "rgb(210,210,210)",
        transform: `translateX(${translateX})`,
        transition: "all ease 0.5s",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/protected1"}>Protected1</Link>
        <Link to={"/protected2"}>Protected2</Link>
      </div>
    </div>
  );
};

export default withRouter(SideBar);
