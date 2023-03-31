import React from "react";

class WorkPageV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul data-testid="list" className="wrapper">
          <li>id: {this.props.id}</li>
          <li>First name: First Name</li>
          <li>Last name: Last Name</li>
          <li>group: group</li>
          <li>topic: topic</li>
          <li>answer:</li>
          <p>gm3rkmob rk3mgko3</p>
        </ul>
      </div>
    );
  }
}

export default WorkPageV2;
