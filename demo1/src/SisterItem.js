import React, { Component } from 'react';
import PropTypes from "prop-types"

class SisterItem extends Component {
   
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }

    render() { 
        let {avname, itemData} = this.props;
        return (  
            <li
                onClick={this.handleClick}
                dangerouslySetInnerHTML={{__html:avname + itemData}}
            >
            </li>
        );
    }
}

SisterItem.protoTypes={
    avname: PropTypes.string.isRequired,
    itemData: PropTypes.string,
    index: PropTypes.number,
    deleteItem:PropTypes.func
}

SisterItem.defaultProps={
    avname:"小花"
}
 
export default SisterItem;