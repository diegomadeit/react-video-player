import { connect } from "react-redux";
import { getPlayList, getActiveVideoId } from "../reducers";
import PlayList from "../components/PlayList";
import { selectVideo } from "../actions";

const mapStateToProps = state => ({
  playList: getPlayList(state),
  activeVideoId: getActiveVideoId(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchSelectVideo: id => {
    dispatch(selectVideo(id));
  }
});

const ViewPlayList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayList);

export default ViewPlayList;
