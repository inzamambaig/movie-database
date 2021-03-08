import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Movies from "./Movies";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { rows: "" };
  }

  performSearch(search) {
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=e6edf2217cc5f4a10cacbabba108a7b0&query=" +
      search;

    $.ajax({
      url: url,
      success: (result) => {
        const search = result.results;

        const movieData = [];

        search.forEach((movie) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <Movies key={movie.id} movies={movie} />;
          movieData.push(movieRow);
        });

        this.setState({ rows: movieData });
      },
      error: (xhr, status, err) => {
        console.error("Warning Data not found");
      },
    });
  }

  handleSearch(e) {
    this.performSearch(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <table className="header-table">
          <tbody>
            <tr>
              <td>
                <img src="logo.svg" width="50" alt="Logo"></img>
              </td>
              <td>
                <h2>Movies Database</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          type="text"
          placeholder="Enter a movie name"
          onChange={this.handleSearch.bind(this)}
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
