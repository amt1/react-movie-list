import React, {Component} from "react";
import FilmTitleLink from "./FilmTitleLink";

class FilmList extends Component {

  render(){
    const filmTitleNodes = this.props.data.map(filmTitleLink => {
      return(
        <FilmTitleLink><a href={filmTitleLink.url}>{filmTitleLink.name}</a></FilmTitleLink>
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
