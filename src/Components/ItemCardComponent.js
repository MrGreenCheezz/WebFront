import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export class ItemCardComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div style={{maxWidth: 500 , display: "inline-block" , float: "left" , marginTop: "20px", margin: "35px"}} >
               <Card sx={{ maxWidth: 500, width: 300 }} variant="outlined">
                   <CardMedia component="img" image={this.props.ImageLink} sx={{objectFit: "fill"}} 
                       height="200" 
                   />
                   <CardContent >
                       <Typography>{this.props.Name}</Typography>
                       <Typography>{this.props.Price}</Typography>
                   </CardContent>
               </Card> 
            </div>
        )
    }
}

export default ItemCardComponent
