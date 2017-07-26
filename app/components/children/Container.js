import React, { Component } from 'react';
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';
import PropTypes from 'prop-types';

import Bin from './grandchildren/Bin';
import Item from './grandchildren/Item';

// need to separate Bin and Container from react-dnd example

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        a: { top: 180, left: 50, title: 'Drag me around' },
        b: { top: 180, left: 100, title: 'Drag me too' },
        c: { top: 180, left: 150, title: 'Drag me too' }
      }
    };
  }

  moveItem(id, left, top) {
    this.setState(update(this.state, {
      items: {
        [id]: {
          $merge: { left, top }
        }
      }
    }));
  }

  render() {
    const { hideSourceOnDrag } = this.props;
    return (
      <div style = {{
        height: '400px',
        width: '400px',
        border: '5px solid blue'
      }}>
        <p>
          <Bin accepts={ItemTypes.STUFF} />
          <Bin accepts={ItemTypes.MORESTUFF} />
          <Bin accepts={ItemTypes.LESSSTUFF} />
        </p>
        <p>
          <Item name="&#128009;"
            type={ItemTypes.STUFF}
            top={this.state.items.a.top}
            left={this.state.items.a.left}
            hideSourceOnDrag={hideSourceOnDrag} />
          <Item name="&#9822;"
            type={ItemTypes.MORESTUFF}
            top={this.state.items.b.top}
            left={this.state.items.b.left}
            hideSourceOnDrag={hideSourceOnDrag}/>
          <Item name="&#128120;"
            type={ItemTypes.LESSSTUFF}
            top={this.state.items.c.top}
            left={this.state.items.c.left}
            hideSourceOnDrag={hideSourceOnDrag}/>
        </p>
      </div>
    );
  }
}

Container.propTypes = {
  hideSourceOnDrag: PropTypes.bool.isRequired
};

export default DragDropContext(HTML5Backend)(Container);
