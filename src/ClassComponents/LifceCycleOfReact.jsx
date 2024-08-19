import { Component } from "react";
import Test from "./Test";
/*
React components have a lifecycle consisting of three phases: Mounting, Updating, and Unmounting. 
Each phase has specific lifecycle methods that are called at different points in the 
component's lifecycle.

Three phases of life cycle methods

1.Mounting: (Birth of the component)
This is the phase when a component is being created and inserted into the DOM. 
The methods associated with this phase are:

* constructor(props): Called before the component is mounted. It is used for initializing state and binding event handlers.

* static getDerivedStateFromProps(props, state): Called right before rendering, both on the initial mount 
  and on subsequent updates. It returns an object to update the state or null to update nothing.

* render(): 
It returns the JSX to be rendered in the DOM.
The render method is used to render HTML of your class component. this required in class copmonent. 
runs during mounting and updating phase of lifecycle. render method should be pure means no state manipulation should happen.

* componentDidMount(): Called immediately after the component is mounted. 
  It is commonly used for making API calls, setting up subscriptions, and initializing the state that depends on the DOM.
-----------------------------------------------------------------------------------------------------------------------------------------------------------
2. Updating: (Growth of the component)
  This phase occurs when a component is being re-rendered due to changes in props or state.
  The methods associated with this phase are:

* static getDerivedStateFromProps(props, state): Called again before every re-render, 
  just as it is before the initial render.

* shouldComponentUpdate(nextProps, nextState): Called to let React know if a component’s output is not affected 
  by the current change in state or props. It returns a boolean value. By default, it returns true.

* render(): This method is called again to re-render the component with the new state or props.

* getSnapshotBeforeUpdate(prevProps, prevState): Called right before the changes from the virtual DOM are 
  reflected in the DOM. It returns a value that is passed to componentDidUpdate.

* componentDidUpdate(prevProps, prevState, snapshot): Called immediately after the update is flushed to the DOM.
  It is a good place for DOM manipulation, making network requests, or performing other side effects based on the 
  previous props or state.
  runs when any updation happens in the component(props changed, state update or force update)
-----------------------------------------------------------------------------------------------------------------------------------------------------------

3. Unmounting: (Death of the component)
This is the phase when a component is being removed from the DOM. The method associated with this phase is:

* componentWillUnmount(): Called immediately before a component is destroyed. 
  It is used for cleanup tasks like invalidating timers, canceling network requests, 
  or cleaning up subscriptions that were created in componentDidMount.
  
  runs beofre component gets vanished(death) and used to perform cleanups 

These lifecycle methods allow developers to hook into specific points in a component's lifecycle, 
enabling them to manage side effects, optimize performance, and keep the component's state in sync with external data.


*/
/*
    questions and answers:
1.what is side effects in react ?
A React side-effects occurs when we use something that is outside the scope of react.js in our react componets
example: web API's like local sotrage session storage. calling apis. 
 */
class LifceCycleOfReact extends Component {
  constructor(props) {
    // construcot is part of mounting. called Only once in lifecycle - only on component mounting stage / when new component is created
    super(props);
    this.state = { count: 0 };
    console.log("constructor called");
  }

  componentDidMount() {
    // called on component mount and used to performs side effects // we don't get any arguments in this method
    // console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //  runs when any updation happens in the component(props changed, state update or force update)
    // console.log("componentDidUpdate", "prevProps",prevProps, "prevState", prevState, "snapshot", snapshot);
  
    if (snapshot !== null) {
      console.log(`count changed from ${snapshot} to ${this.state.count}`)
    }
  }

  componentWillUnmount(){
    // console.log("componentWillUnmount")
  }
  
  shouldComponentUpdate(nextProps, nextState){
    // it will be used for optimzation. but this can backfires sometimes so use with caution
    console.log('shouldComponentUpdate',"nextProps", nextProps, "nextState", nextState)
    if(this.state.count !== nextState.count){
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      return prevState.count // passed as snap to componentDidUpdate
    }
    return null
  }

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 }); // re-render not called because if condition in shouldComponentUpdate method 
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // it is part of mounting and updating. it is called on every state chnaged(re-rendered) of parent and self  // Note: don't update state in render method.

    console.log("render called");
    return (
      <div>
        <h3>{this.state.count}</h3>
        <Test count={this.state.count} />
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default LifceCycleOfReact;
