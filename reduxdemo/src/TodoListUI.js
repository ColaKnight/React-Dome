import React from 'react'
import { Input, Button, List } from 'antd'
import "antd/dist/antd.css"

const TodoListUI = (props) => {
    return ( 
        <div style={{margin:"10px"}}>
            <div>
                <Input 
                    placeholder={props.inputValue}
                    style={{width:"250px", marginRight:"10px"}}
                    onChange={props.onChangeInputValue}
                    value={props.inputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.onAddClick}
                >   
                    增加
                </Button>
            </div>
            <div style={{margin:"10px", width:"300px"}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index)=>(
                        <List.Item
                            onClick={() => {props.onDeleteItem(index)}}
                        >
                            {item}
                        </List.Item>
                    )}
                ></List>
            </div>
        </div>
     );
}

export default TodoListUI;