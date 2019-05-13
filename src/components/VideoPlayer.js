import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";

class VideoPlayer extends Component {
  render() {
    const { activeVideo, nextVideoId, dispatchNextVideo } = this.props;

    return (
      <section>
        {activeVideo && (
          <div className={styles.wrapper}>
            <ReactPlayer
              url={activeVideo.data.url}
              className={styles.player}
              playing
              loop={!!!nextVideoId}
              width="100%"
              height="100%"
              onEnded={() => dispatchNextVideo(nextVideoId)}
            />
          </div>
        )}
      </section>
    );
  }
}

VideoPlayer.propTypes = {
  activeVideo: PropTypes.object,
  nextVideoId: PropTypes.string,
  dispatchNextVideo: PropTypes.func.isRequired
};

export default VideoPlayer;
