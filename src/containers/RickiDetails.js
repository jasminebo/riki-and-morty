import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { RICKI_API_URL } from "../config";
import axios from "axios";

function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    return <Component {...props} params={params} />;
  }
  return ComponentWithRouter;
}

class RickiDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
    };
  }
  componentDidMount() {
    axios.get(RICKI_API_URL + "/" + this.props.params.id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        this.setState({ character: response.data });
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default withRouter(RickiDetails);
