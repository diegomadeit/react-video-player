import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createVideo } from "../actions";
import AddVideo from "../components/AddVideo";

const mapDispatchToProps = dispatch => ({
  dispatchCreateVideo: (event, video, redirect) => {
    event.preventDefault();
    dispatch(createVideo(video));
    redirect();
  }
});

const CreatePlayListVideo = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddVideo)
);

export default CreatePlayListVideo;
