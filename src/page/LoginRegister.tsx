import * as React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter, RouteComponentProps } from "react-router";
//importing user state update action
import { updateUserStateAction } from "../reducers/userState";

interface IOwnProps {
  isLogin?: boolean;
  updateUserStateAction: (payload: Record<string, any>) => Promise<any>;
}

type Props = IOwnProps & RouteComponentProps<any>;

class Login extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      keepLogin: false,
    };
  }

  componentDidMount() {
    // this.props
    //   .updateUserStateAction({
    //     userName: "dummmyUser",
    //     isLoggedIn: true,
    //   })
    //   .then((val) => {
    //     console.log("redux updated", val);
    //   });
  }

  handleSubmit = (event: any) => {
    // makeApi call here
    event.preventDefault();
  };

  signInAction = (e: any) => {
    this.props.updateUserStateAction({ isLoggedIn: true }).then(() => {
      const redirectTo: string =
        new URLSearchParams(this.props.location.search).get("redirect") || "/";
      this.props.history.replace(redirectTo);
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          flex: 1,
          flexFlow: "column",
          paddingTop: "10px",
          // backgroundColor: "#f1f1f1",
          // height: "100%",
          width: "100%",
        }}
      >
        <Typography
          align={"center"}
          variant={"subtitle1"}
          color={"primary"}
          style={{ fontSize: "18px", fontWeight: 600 }}
        >
          {"Sign In"}
        </Typography>
        <Grid container spacing={0} justify={"space-around"}>
          <Grid item sm={4}></Grid>
          <Grid item sm={4} xs={12}>
            <form
              onSubmit={this.handleSubmit}
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <FormControl variant="outlined" style={{ width: "95%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  User Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={"Instructor"}
                  onChange={() => {}}
                  label="User Type"
                >
                  <MenuItem value={"Instructor"}>As an Instructor</MenuItem>
                  <MenuItem value={"Student"}>As a Student</MenuItem>
                  <MenuItem value={"Admin"}>As an Admin</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                id={"email"}
                label={"Email/Username"}
                variant="outlined"
                style={{ width: "95%", marginTop: "20px" }}
                color={"primary"}
                // autoFocus
              />
              <TextField
                required
                id={"password"}
                label={"Password"}
                variant="outlined"
                type={"password"}
                style={{ width: "95%", marginTop: "20px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Checkbox color={"primary"} />
                <Typography align={"left"}>{"Remember me"}</Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "95%", marginTop: "20px" }}
                onClick={this.signInAction}
              >
                {"SIGN IN"}
              </Button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "95%",
                  marginTop: "15px",
                }}
              >
                <Button
                  variant="text"
                  color="primary"
                  style={{ fontSize: "12px" }}
                >
                  {"Forgot password?"}
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  style={{ fontSize: "12px" }}
                  href="/register"
                >
                  {"Don't have an account? Sign Up"}
                </Button>
              </div>
            </form>
          </Grid>
          <Grid item sm={4}></Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { userState: state.userState };
};

const mapDispatchProps = {
  updateUserStateAction,
};

export default connect(mapStateToProps, mapDispatchProps)(Login);
