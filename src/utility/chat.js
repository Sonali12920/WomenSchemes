import React, { Component } from "react";
import PropTypes from "prop-types";

class KommunicateChat extends Component {
  static propTypes = {
    prop: PropTypes,
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "275ecf24ba27f07d32ece8cc2994daa68",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return <div></div>;
  }
}

export default KommunicateChat;
