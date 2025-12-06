import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent did mount");
  }

  componentDidUpdate() {
    // console.log("parent did update");
  }

  componentWillUnmount() {
    // console.log("parent willUnmount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1> About Page</h1>
        <UserClass/>
      </div>
    );
  }
}

export default About;
