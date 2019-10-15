import React, { Component } from 'react';

class SisterItem extends Component {
   
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }

    render() { 
        let {itemData} = this.props;
        return (  
            <li
                onClick={this.handleClick}
                dangerouslySetInnerHTML={{__html:itemData}}
            >
            </li>
        );
    }
}
 
export default SisterItem;