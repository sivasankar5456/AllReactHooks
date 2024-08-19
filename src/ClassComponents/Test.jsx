import { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
  }

  static getDerivedStateFromProps(props, state) {    // Called again before every re-render, just as it is before the initial render.
    console.log("getDerivedStateFromProps",props, state);
    if (props.count !== state.count) {
      return {
        count: props.count,
      };
    }
    return null;
  }

  componentDidMount(){
    // console.log('componentDidMount')
  }
  componentDidUpdate(){
    // console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    // console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
export default Test;
