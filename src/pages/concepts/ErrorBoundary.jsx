/*
Error Boundary component will catch javascript error anywhere in their child component tree 
and display a fallback UI
*/

import React, { Component } from "react";
import ErrorPage from "../../components/ErrorPage";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error) {
    
    this.setState({ error: error });
  }
  render() {
    if (this.state.error) {
        console.log('siva',this.state.error)
      return <ErrorPage />;
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
