import React, { Component } from 'react';

class SisterItem extends Component {
   
    render() { 
        let {itemData} = this.props;
        return (  
            <li
                dangerouslySetInnerHTML={{__html:itemData}}
            >
            </li>
        );
    }
}
 
export default SisterItem;