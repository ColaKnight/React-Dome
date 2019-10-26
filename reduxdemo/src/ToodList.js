import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import {changeInputAction, addItemAction, deleteItemAction} from "./store/actionCreators"
import store from "./store"
import "antd/dist/antd.css"

class ToodList extends Component {
    
    constructor(props){
        super(props)
        this.state=store.getState()
        this.onAddBtn=this.onAddBtn.bind(this)
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
            <div style={{margin:"10px"}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue}
                        style={{width:"250px", marginRight:"10px"}}
                        onChange={this.onChangeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button 
                        type="primary"
                        onClick={this.onAddBtn}
                    >增加</Button>
                </div>
                <div style={{margin:"10px", width:"300px"}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index)=>(
                            <List.Item
                                onClick={this.onDeleteItem.bind(this, index)}
                            >
                                {item}
                            </List.Item>
                        )}
                    ></List>
                </div>
            </div>
         );
    }
}
 
export default ToodList;
