import React from "react";
import { getUrl } from "../../api";

class RedirectPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getUrl(this.props.match.params.hash).then((response) => {
      window.location.href = (response[0] && response[0].original) || "/";
    });
  }

  render() {
    return null;
  }
}

export default RedirectPage;
