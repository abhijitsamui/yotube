import React, { Component } from "react";
import Searchbar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("puppy");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    //console.log("From app", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
