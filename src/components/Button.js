import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, local: currentLocale } = this.props;
    const { change: nextChange, local: nextLocale } = nextProps;
    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {
  
    const { change, local, show,enable } = this.props;
    if(!enable)return null;
    return (
      <>
        <button onClick={() => change(local)}>{local==="bn-bd"?'click here':"এখানে ক্লিক করুন"}</button>
        {show && <p>Using English</p>}
      </>
    );
  }
}
export default Button;
