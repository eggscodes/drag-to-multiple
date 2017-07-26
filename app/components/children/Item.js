import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';


const itemSource = {
  beginDrag: function (props) {
    const { id, left, top } = props;
    return { id, left, top };
  },
  endDrag: function (props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert(`You dropped ${item.name} into ${dropResult.name}`);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Item extends Component {
  render() {
    const { name, left, top, isDragging, connectDragSource, children } = this.props;

    return connectDragSource(
      <div style = {{ left, top }}>
        <p>{name}</p>
      </div>
    );
  }
}

export default DragSource(props => props.type, itemSource, collect)(Item);
