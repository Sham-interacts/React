import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "XYZ",
        location: "ABC",
        avatar_url: "Image not found",
      },
    };
    // console.log("child constructor");
  }

  async componentDidMount() {
    // const response = await fetch("https://api.github.com/users/akshaymarch7");
    // const data = await response.json();
    // this.setState({userInfo:data});
    this.timer = setInterval(() => {
      // console.log("Inside child didMount");
    }, 1000);
    // console.log("child did mount");
  }

  componentDidUpdate() {
    // console.log("child did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("child will unmount");
  }

  render() {
    // console.log("child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>User Class Component</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="font-bold"> {loggedInUser}</h1>}
        </UserContext.Consumer>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
