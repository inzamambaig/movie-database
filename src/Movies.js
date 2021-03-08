import React, { Component } from "react";
import "./App.css";
class Movies extends Component {
  view() {
    window.location.href =
      "https://www.themoviedb.org/movie/" + this.props.movies.id;
  }
  render() {
    return (
      <>
        <table key={this.props.movies.id} className="movies">
          <tbody className="movies-list">
            <tr className="row">
              <td>
                <img
                  src={this.props.movies.poster_src}
                  alt="Movie Poster"
                  width="150"
                  className="movie-poster"
                />
              </td>
            </tr>
            <tr className="row">
              <td>
                <h3 className="movie-title">{this.props.movies.title}</h3>
                <p className="movie-overview">{this.props.movies.overview}</p>
                <button onClick={this.view.bind(this)} className="view-btn">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
