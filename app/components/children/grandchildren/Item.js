import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../../../utils/ItemTypes';
import PropTypes from 'prop-types';

const style = "position: absolute";
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
    const { name, hideSourceOnDrag, left, top,
      isDragging, connectDragSource, children } = this.props;

    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    return connectDragSource(
      <div style = {{
        position: 'absolute',
        style, left, top }}>
        {name}
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  hideSourceOnDrag: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default DragSource(props => props.type, itemSource, collect)(Item);
