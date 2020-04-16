import React from "react";
import { createUrl, createHash } from "../../api";
import "./index.css";

const defaultState = {
  url: "",
  isFetching: false,
  shortUrl: "",
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      url: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      isFetching: true,
    });

    createHash().then((hash) => {
      createUrl({
        original: this.state.url,
        short: hash,
      }).then((json) => {
        this.setState({
          ...this.state,
          isFetching: false,
          shortUrl: `${window.location.origin}/${json.short}`,
        });
      });
    });
  };

  handleResetClick = () => {
    this.setState(defaultState);
  };

  render() {
    const { shortUrl, isFetching } = this.state;
    const { handleChange, handleSubmit, handleResetClick } = this;

    return (
      <div className="App">
        <div className="container">
          {shortUrl ? (
            <>
              <a className="short-url" href={shortUrl} target="_blank">
                {shortUrl}
              </a>
              <button
                className="candy-button"
                type="button"
                onClick={handleResetClick}
              >
                DO IT AGAIN!
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                className={`url-input ${isFetching ? "compress" : ""}`}
                type="url"
                name="url"
                value={this.state.url || ""}
                placeholder="Type your URL here"
                onChange={handleChange}
                required
              />
              <button className="candy-button" type="submit">
                MAKE IT SHORT!
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
