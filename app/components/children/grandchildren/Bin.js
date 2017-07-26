import React, { Component } from 'react';
import update from 'react/lib/update';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../../../utils/ItemTypes';
import PropTypes from 'prop-types';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const binTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.props.moveItem(item.id, left, top);
  }
};

class Bin extends Component {

  render() {
    // console.log(this.props);
    const { canDrop, isOver, connectDropTarget } = this.props;
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

Bin.propTypes = {
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

export default DropTarget(props => props.accepts, binTarget, collect)(Bin);
