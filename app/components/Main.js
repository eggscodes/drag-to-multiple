import React, { Component } from 'react';
import Container from './children/Container';

export default class DragItems extends Component {
  constructor(props) {
    super(props);
    this.handleHideSourceClick = this.handleHideSourceClick.bind(this);
    this.state = {
      hideSourceOnDrag: true
    };
  }

  handleHideSourceClick() {
    this.setState({
      hideSourceOnDrag: !this.state.hideSourceOnDrag
    });
  }

  render() {
    const { hideSourceOnDrag } = this.state;

    return (
      <Container hideSourceOnDrag={hideSourceOnDrag} />
    );
  }
}
