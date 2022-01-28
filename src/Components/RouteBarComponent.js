import React, { Component, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Tabs, Tab, AppBar, Box } from "@mui/material";
import logo from "../Pictures/LogoIcon.png";

export class RouteBarComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      navBarState: 1,
    };
  }

  handleChange(event, newValue) {
    this.setState({ navBarState: newValue });
  }

  render() {
    return (
      <div className="RouteBar">
        <Box sx={{ bgcolor: "secondary" }} position="center">
          <AppBar
            position="static"
            color="primary"
            sx={{ flexDirection: "initial" }}
          >
            <div className="HorizontalLogo">
              <div className="SmallLogoIcon">
                <img src={logo} />
                <span className="LogoText">Magic color</span>
              </div>
            </div>
            <Tabs
              value={this.state.navBarState}
              onChange={this.handleChange}
              sx={{ "& .MuiTabs-flexContainer": { float: "right" } }}
              textColor="inherit"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Главная" to="/" component={Link} value={1} />
              <Tab label="Продукты" to="/products" component={Link} value={2} />
              <Tab label="Информация" to="/info" component={Link} value={3} />
            </Tabs>
            <div className="EmptyFlexDiv" style={{flex:"1"}}></div>
          </AppBar>
        </Box>
        {/* <AppBar position="static" color="primary">
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" to="/" component={Link} />
          <Tab label="Item Two" to="/info" component={Link}/>
          <Tab label="Item Three" to="/products" component={Link} />
        </Tabs>
      </AppBar> */}
      </div>
    );
  }
}

export default RouteBarComponent;
