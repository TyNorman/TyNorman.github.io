import React from "react";
import "./ImageComponent.css";

class ImageComponent extends React.Component {


  state = { isOpen: false };

  handleClick = () => {
      //this.setState({ isOpen: !this.state.isOpen });
    };
  render() {
    return (
      <div className="container">
      <img className="preview" src={this.props.icon} alt="no image" onClick={this.props.onClick}/>
      {this.state.isOpen && (
          <dialog className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleClick}
          >
            <img className="image" src={this.props.icon} onClick={this.handleClick}/>
          </dialog>
        )}


      </div>
    );

  }
}

export default ImageComponent;
