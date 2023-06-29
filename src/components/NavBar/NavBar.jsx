import React, { Component } from "react";
import "./NavBar.css";
import Grid from "@mui/material/Grid";
import ig_logo from "../../images/logoinsta.png";
import Home from "../../images/home.svg";
import Explore from "../../images/explore.svg";
import Message from "../../images/message.svg";
import Love from "../../images/love.svg";
import Notifications from "../../images/home.svg";
import Create from "../../images/home.svg";
import ProfilePic from "../../images/profile.png";
import { Avatar } from "@mui/material";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar_wrapper">
        <div className="barcomponent">
          <Grid container>
            <Grid item xs={2}>
              Grid One
            </Grid>
            <Grid item xs={3}>
              <img src={ig_logo} alt="Instagram" width={"105px"} />
            </Grid>
            <Grid item xs={3}>
              <input type="text" className="searchbar" placeholder="Search"/>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <img src={Home} alt="Home" width={"25px"} />
              <img src={Explore} alt="Explore" width={"25px"} />
              <img src={Message} alt="Message" width={"25px"} />
              <img src={Love} alt="Message" width={"25px"} />

              <Avatar src={ProfilePic} className="nav_img" style={{"maxHeight":"25px","maxWidth":"25px"}}/> 
              <img src={Notifications} alt="Notifications" width={"25px"} />
              <img src={Create} alt="Create" width={"25px"} />
            </Grid>
            <Grid item xs={1}>
            <img src={ProfilePic} alt="Home" width={"25px"} />
            
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default NavBar;
