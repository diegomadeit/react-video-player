import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./AddVideo.module.css";

class AddVideo extends Component {
  state = {
    artist: "",
    title: "",
    url: ""
  };

  onFormSubmit = event => {
    const { dispatchCreateVideo, history } = this.props;

    this.setState({
      artist: "",
      title: "",
      url: ""
    });

    dispatchCreateVideo(event, this.state, () => history.push("/"));
  };

  onInputChange = event => {
    const video = { ...this.state };
    video[event.target.name] = event.target.value;
    this.setState(video);
  };

  render() {
    return (
      <section>
        <h3>Add a new video to the videoplayer</h3>
        <form
          className={styles.form}
          onSubmit={event => this.onFormSubmit(event)}
        >
          <input
            className={styles.input}
            onChange={event => this.onInputChange(event)}
            placeholder="Artist name ..."
            name="artist"
            value={this.state.artist}
          />
          <input
            className={styles.input}
            onChange={event => this.onInputChange(event)}
            placeholder="Video title ..."
            name="title"
            value={this.state.title}
          />
          <input
            className={styles.input}
            onChange={event => this.onInputChange(event)}
            placeholder="Video URL ..."
            name="url"
            value={this.state.url}
          />
          <button className={styles.button} type="submit">
            Add Video
          </button>
        </form>
      </section>
    );
  }
}

AddVideo.propTypes = {
  dispatchCreateVideo: PropTypes.func.isRequired
};

export default AddVideo;
