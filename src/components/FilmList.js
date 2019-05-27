import React, {Component} from "react";
import FilmTitleLink from "./FilmTitleLink";

class FilmList extends Component {

  render(){

    const filmTitleNodes = this.props.data.map(filmTitleLink => {
      return(
        <FilmTitleLink>{filmTitleLink.name}</FilmTitleLink>
      );
    })
    return(
      <ul className = "film-list">
        {filmTitleNodes}
      </ul>
    );
  }
}
export default FilmList;
