import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from "./store"
import "antd/dist/antd.css"

class ToodList extends Component {
    
    constructor(props){
        super(props)
       
       
        this.onChangeInputValue=this.onChangeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.state=store.getState()
        store.subscribe(this.storeChange)
    }

    storeChange(){
        this.setState(store.getState())
        console.log(this.state)
    }

    onChangeInputValue(e){
        console.log(e.target.value)
        const action = {
            type: "changeInput",
            value: e.target.value
        }
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
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:"10px", width:"300px"}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(
                            <List.Item>
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
