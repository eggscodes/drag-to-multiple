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
        a: { name: 'http://gph.to/2h3R26x', left: 50, top: 180, type: ItemTypes.STUFF },
        b: { name: 'http://gph.to/2vJycoB', left: 100, top: 180, type: ItemTypes.MORESTUFF },
        c: { name: 'http://gph.to/2tKtSbi', left: 150, top: 180, type: ItemTypes.LESSSTUFF }
      }
    };
    this.moveItem = this.moveItem.bind(this);
  }

  moveItem(id, left, top) {
    console.log(id, left, top);
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
    const { items } = this.state;

    return (
      <div style = {{
        height: '400px',
        width: '400px',
        border: '5px solid blue'
      }}>
        <Bin accepts={ItemTypes.STUFF} moveItem={this.moveItem} />
        <Bin accepts={ItemTypes.MORESTUFF} moveItem={this.moveItem} />
        <Bin accepts={ItemTypes.LESSSTUFF} moveItem={this.moveItem} />

        {Object.keys(items).map((key) => {
          const { name, left, top, type } = items[key];
          return (
            <Item
                key={key}
                id={key}
                name={name}
                left={left}
                top={top}
                type={type}
                hideSourceOnDrag={hideSourceOnDrag}
              />
          );
        })}
      </div>
    );
  }
}

Container.propTypes = {
  hideSourceOnDrag: PropTypes.bool.isRequired
};

export default DragDropContext(HTML5Backend)(Container);
