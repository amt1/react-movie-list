import React, {Component} from "react";

class FilmTitleLink extends Component{

  render(){
    return(
      <li className="film-title-link">
        {this.props.children}
      </li>
    );
  }
}
export default FilmTitleLink;
