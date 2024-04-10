import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {
    console.log("kskskskk");
  }
  render() {
    return (
      <div>
        <h1>CLassy Profile</h1>
        <h2>count</h2>
        <button
          onClick={() => {
            this.setState({
              count: 2,
            });
          }}
        >
          click from classy{" "}
        </button>
      </div>
    );
  }
}
export default ProfileClass;
