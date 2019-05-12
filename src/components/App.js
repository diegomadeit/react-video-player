import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Layout from "./Layout";
import Routes from "../routes";

const App = ({ store }) => (
  <Layout>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Layout>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
