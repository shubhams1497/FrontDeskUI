import * as React from "react";
import { RouteComponentProps } from "react-router";
import styles from "./RegisterPage.module.css";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

type IProps = RouteComponentProps<any>;

class RegisterPage extends React.Component<IProps> {
  handleSubmit = (event: any) => {
    // makeApi call here
    console.log(event);
    // event.preventDefault();
  };

  render() {
    return (
      <div className={styles["main-container"]}>
        <Typography
          align={"center"}
          variant={"subtitle1"}
          color={"primary"}
          style={{ fontSize: "18px", fontWeight: 600 }}
        >
          {"Register"}
        </Typography>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <FormControl variant="outlined" style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-outlined-label">
              User Type
            </InputLabel>
            <Select
              autoFocus
              tabIndex={1}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={"Instructor"}
              onChange={() => {}}
              label="User Type"
            >
              <MenuItem value={"Instructor"}>For an Instructor</MenuItem>
              <MenuItem value={"Student"}>For a Student</MenuItem>
              <MenuItem value={"Admin"}>For an Admin</MenuItem>
            </Select>
          </FormControl>
          <div className={styles["flex-row-1"]}>
            <TextField
              required
              id={"firstname"}
              label={"firstname"}
              variant="outlined"
              style={{ width: "49%" }}
              color={"primary"}
              tabIndex={2}
            />
            <TextField
              required
              id={"lastname"}
              label={"lastname"}
              variant="outlined"
              style={{ width: "49%" }}
              color={"primary"}
              tabIndex={3}
            />
          </div>
          <TextField
            required
            id={"email"}
            type={"email"}
            label={"email"}
            variant="outlined"
            style={{ width: "100%", marginTop: "15px" }}
            color={"primary"}
            tabIndex={4}
          />
          <TextField
            required
            id={"password1"}
            label={"Password"}
            variant="outlined"
            type={"password"}
            style={{ width: "100%", marginTop: "15px" }}
          />
          <TextField
            required
            id={"password2"}
            label={"Confirm Password"}
            variant="outlined"
            type={"password"}
            style={{ width: "100%", marginTop: "15px" }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", marginTop: "20px" }}
          >
            {"Register Now"}
          </Button>
          <Link to="/login">
            <Typography
              align={"left"}
              variant={"subtitle1"}
              color={"primary"}
              style={{ marginTop: "15px" }}
            >
              {"Already has an account?"}
            </Typography>
          </Link>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
