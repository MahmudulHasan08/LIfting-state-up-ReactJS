import React from "react";

export default class Form extends React.Component {
  state = {
    name: "javescript",
    textarea: "javascript is awesome",
    libraries: "React",
    isAwesome:true
  };

  nameFunc = (e) => {
    if (e.target.type === "text") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.type === "textarea") {
        console.log(e.target.type);
      this.setState({
        textarea: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        libraries: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
        this.setState({
            isAwesome: e.target.checked,
        });
      }  else {
          console.log(e.target.checked);
      console.log("something is worng");
    }
  };

  submithandler=(e)=>{
     
    const { name, textarea, libraries,isAwesome } = this.state;
    e.preventdefalut();
    console.log(name, textarea, libraries, isAwesome);
  }

  render() {
    const { name, textarea, libraries,isAwesome } = this.state;
    return (
      <form action="" onSubmit={this.submithandler}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={this.nameFunc}
        />
        <br />
        <p>{name}</p>
        <br /> <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={textarea}
          onChange={this.nameFunc}
        ></textarea>
        <br /> <br />
        <select name="" id="" value={libraries} onChange={this.nameFunc}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
        <input type="checkbox" checked={isAwesome} value={isAwesome} onChange={this.nameFunc} />
        <br /><br />
        <input type="submit" value={"Submit"}/>
      </form>
    );
  }
}
