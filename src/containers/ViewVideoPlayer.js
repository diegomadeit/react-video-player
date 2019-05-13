import { connect } from "react-redux";
import { getActiveVideo, getNextVideoId } from "../reducers";
import VideoPlayer from "../components/VideoPlayer";
import { selectVideo } from "../actions";

const mapStateToProps = state => ({
  activeVideo: getActiveVideo(state),
  nextVideoId: getNextVideoId(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchNextVideo: id => {
    dispatch(selectVideo(id));
  }
});

const ViewVideoPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

export default ViewVideoPlayer;
