import React, { useState } from 'react';
import DropTarget from "./DropTarget";

const DropList = props => {
    const [items, setItems] = useState([]);
    const itemDropped = item => setItems([...items, item]);
    return (
        <div>
            <DropTarget onItemDropped={itemDropped} dropEffect="link">
                <div className="drag-drop-container">
                    {items.map(item =>(
                        <div key={item} className="item">
                            {item}
                        </div>
                    ))}
                </div>
            </DropTarget>            
        </div>
    );
}

export default DropList;