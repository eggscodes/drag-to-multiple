import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ItemTypes from '../utils/ItemTypes';

import Bin from './children/Bin';
import Item from './children/Item';

class Container extends Component {
  render() {
    return (
      <div style = {{
        height: '400px',
        width: '400px',
        border: '5px solid blue'
      }}>
        <Item name = "&#128009;" type={ItemTypes.STUFF} />
        <Item name = "&#9822;" type={ItemTypes.MORESTUFF}/>
        <Item name = "&#128120;" type={ItemTypes.LESSSTUFF}/>

        <Bin accepts={ItemTypes.STUFF} />
        <Bin accepts={ItemTypes.MORESTUFF} />
        <Bin accepts={ItemTypes.LESSSTUFF} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
