import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {date:new Date()}
  //   }

  //because of don't need props in this case

  state = { date: new Date(), local: "bn-bd" };
  componentDidMount() {
    this.clocktimer = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentWillUnmount() {
    clearInterval(this.clocktimer);
  }
  handleClick = (local) => {
    this.setState({
      local,
    });
    console.log(" on Cliked");
  };

  render() {
    console.log("Clock component render");
    const { date, local } = this.state;
    // let button;
    // if (local === "bn-bd") {
    //   button = (
    //     <Button change={this.handleClick} local="en-US">
    //       Click here
    //     </Button>
    //   );
    // } else {
    //   button = (
    //     <Button change={this.handleClick} local="bn-bd">
    //       Click here
    //     </Button>
    //   );
    // }
    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(local)}</span>
        </h1>
      {local==="bn-bd"? <Button change={this.handleClick} local="en-US" show={false}>
          Click here
        </Button>: <Button change={this.handleClick} local="bn-bd" show>
          Click here
        </Button>}
      </div>
    );
  }
}
export default Clock;
