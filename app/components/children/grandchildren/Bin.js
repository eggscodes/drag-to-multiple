import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';

const binTarget = {
  drop: function () {
    return { name: 'Bin' };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Bin extends Component {
  render() {
    // console.log(this.props);
    const { accepts, canDrop, isOver, connectDropTarget } = this.props;
    const isActive = isOver && canDrop;

    let backgroundColor = 'blue';
    if (isActive) {
      backgroundColor = 'yellow';
    } else if (canDrop) {
      backgroundColor = 'green';
    }

    return connectDropTarget(
      <div style = {{
        height: '100px',
        width: '100px',
        border: '1px solid blue',
        borderRadius: '50%',
        margin: '10px',
        float: 'left',
        backgroundColor: { backgroundColor }
      }}>
        {isActive ? 'Relase to drop' : 'Drag an Item here'}
      </div>
    );
  }
}

export default DropTarget(props => props.accepts, binTarget, collect)(Bin);
