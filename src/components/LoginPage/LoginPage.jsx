import React, { Component } from "react";
import { Grid } from "@mui/material";
import ig_login_img from "../../images/login.svg";
import ig_logo from "../../images/logoinsta.png";
import "./LoginPage.css";
import fb from "../../images/fb.png";
import appStore from '../../images/app.png';
import playStore from '../../images/play.png';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  changeLogin = () => {
    if (!this.state.isLogin) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  };
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            Hello
          </Grid>
          <Grid item xs={6}>
            <div className="main_loginpage">
              <div>
                <img
                  src={ig_login_img}
                  alt="Instagram Login"
                  className="left_mob_image"
                />
              </div>
              <div className="rightcomponent_loginpage">
                <img src={ig_logo} alt="Logo" className="logo_loginpage" />
                <div className="inputgroup">
                  <div className="inpgrp_signin">
                    <input
                      type="text"
                      placeholder="Phone number, Email or username"
                      className="inp"
                    />
                    <input type="password" className="inp" />
                    <button className="btn" placeholder="Password">
                      Sign in
                    </button>
                  </div>
                </div>
                <div className="or_container">
                  <div className="or_divider"></div>
                  <div className="or">OR</div>
                  <div className="or_divider"></div>
                </div>
                <div className="login_fb">
                  <img src={fb} alt="Login with facebook" />
                  <div>Login with Facebook</div>
                  <div className="forgot_pass">Forgot password?</div>
                </div>
                <div className="signin_login_opt">
                  {this.state.isLength ? (
                    <div>
                      Dont have an Account? <span> Signup</span>
                    </div>
                  ) : (
                    <div>
                      Have an account? <span> Signin</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="downloadapp">
                <div>Get the app</div>
                <div>
                  <img src={appStore} alt="App store" />
                  <img src={playStore} alt="Play store" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            Surya
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
