import React, { Component } from 'react'
import {changeInputAction, addItemAction, deleteItemAction, getListAction} from "./store/actionCreators"
import store from "./store"
import TodoListUI from "./TodoListUI"

class ToodList extends Component {
    
    constructor(props){
        super(props)
        this.state=store.getState()
        this.onAddBtn=this.onAddBtn.bind(this)
        this.onDeleteItem=this.onDeleteItem.bind(this)
        this.onChangeInputValue=this.onChangeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    componentDidMount(){
        const data = [
                "早上6点起床跑步",
                "中午1点午休",
                "晚上8点到10点，学习2小时"
            ]
        const action = getListAction(data)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    onChangeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    onAddBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }

    onDeleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                onChangeInputValue={this.onChangeInputValue}
                onAddClick={this.onAddBtn}
                list={this.state.list}
                onDeleteItem={this.onDeleteItem}
            />
        );
    }
}
 
export default ToodList;
