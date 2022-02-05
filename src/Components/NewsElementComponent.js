import React, { Component } from "react";
import "../Styles/News.scss";

export class NewsElementComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div className="NewsElement">
        
        <div className="NewsInfoContainer">
          <div className="NewsHeader">
            <h4>{this.props.Header}</h4>
          </div>
          <div className="NewsDesciption">
            <p style={{wordBreak: "break-word"}}>
            
            <img src={this.props.PicLink} style={{maxHeight: "100%", maxWidth: "100%", height: "auto"}}></img>
        
              {this.props.Content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsElementComponent;
