import logo from './logo.svg';
import React from 'react';
import './App.css';
import HorizontalAppBar from './Components/HorizontalAppBar';
import { Outlet } from 'react-router';
import { Typography } from '@mui/material';



function App() {
 
  return (
    <div className="App" style={{
      position: "relative",
      minHeight: "100vh"
    }}>
    <div className="PageMainContent" style={{
      paddingBottom: "2.5rem",
    }}>
     <HorizontalAppBar/>
     <Outlet style={{height: "100%"}}/>
     </div>
      <footer className="BottomImage" style={{
        backgroundColor : "#058505",
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "2.5rem"

      }}>
      <div style={{display: "flex", flexDirection: "row",gap: "30px"}}>
        <div className="FooterText">
          <Typography color="common.white">
           Телефон : +7 777 42 38 055
          </Typography>
        </div>
        <div className="FooterTelephone">
          <Typography color="common.white">
            Email: mcolorcompany@gmail.com
          </Typography>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
