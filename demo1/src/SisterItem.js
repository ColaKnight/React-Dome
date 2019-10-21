import React, { Component } from 'react'
import PropTypes from "prop-types"

class SisterItem extends Component {
   
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }

    //组件第一次存在于DOM中，函数是不会被执行
    //如果已经存在于DOM中，函数才会被执行
    UNSAFE_componentWillReceiveProps (){
        console.log("child----UNSAFE_componentWillReceiveProps ")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.itemData !== this.props.itemData) {
            return true
        } else {
            return false
        }
    }

    render() { 
        let {avname, itemData} = this.props;
        return (  
            <li
                onClick={this.handleClick}
                dangerouslySetInnerHTML={{__html:avname + itemData}}
            >
            </li>
        )
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