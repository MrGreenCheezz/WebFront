import React, { Component } from 'react'
import RouteBarComponent from './RouteBarComponent'
import '../Styles/HorizontalLogo.css'
import { Typography } from '@mui/material'
import logo from "../Pictures/LogoIcon.png"

export class HorizontalAppBar extends Component {
    render() {
        return (
            <div className="HorizontalAppBar">              
                <RouteBarComponent/> 
                <div className="GradientElement"></div>
            </div>
            
        )
    }
}

export default HorizontalAppBar
