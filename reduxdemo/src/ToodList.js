import React, { Component } from 'react'
import {getTodoList, changeInputAction, addItemAction, deleteItemAction} from "./store/actionCreators"
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
