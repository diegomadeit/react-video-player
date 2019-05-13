import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./PlayList.module.css";

const PlayList = ({ playList, activeVideoId, dispatchSelectVideo }) => (
  <section>
    <div className={styles.header}>
      <h3>PlayList</h3>
      <Link className={styles.link} to="/create-video">
        Add video
      </Link>
    </div>
    {playList.length > 0 && (
      <div>
        <table className={styles.playlist}>
          <thead>
            <tr>
              <th className={styles.playlist__head}>Artist</th>
              <th className={styles.playlist__head}>Title</th>
            </tr>
          </thead>
          <tbody>
            {playList.map(video => (
              <tr
                key={video.id}
                className={
                  video.id === activeVideoId
                    ? styles["playlist__row--playing"]
                    : styles.playlist__row
                }
                onClick={() =>
                  video.id !== activeVideoId && dispatchSelectVideo(video.id)
                }
              >
                <td className={styles.playlist__cell}>{video.data.artist}</td>
                <td className={styles.playlist__cell}>{video.data.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
);

PlayList.propTypes = {
  playList: PropTypes.array.isRequired,
  activeVideoId: PropTypes.string.isRequired,
  dispatchSelectVideo: PropTypes.func.isRequired
};

export default PlayList;
