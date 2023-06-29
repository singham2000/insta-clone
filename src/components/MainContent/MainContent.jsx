import React, { Component } from "react";
import "./MainContent.css";
import Grid from "@mui/material/Grid";
import StatusBar from "../StatusBar/StatusBar";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}>
            {" "}
          </Grid>
          <Grid item xs={6} className="maincontent">
            <div>
              <StatusBar />
            </div>
          </Grid>
          <Grid item xs={2}>
            {" "}
          </Grid>
          <Grid item xs={2}>
            {" "}
          </Grid>
        </Grid>
      </div>
    );
  }
}
