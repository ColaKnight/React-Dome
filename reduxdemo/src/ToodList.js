import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import "antd/dist/antd.css"

const data = [
    "篮球",
    "足球",
    "乒乓球"
]

class ToodList extends Component {
 
    render() { 
        return ( 
            <div style={{margin:"10px"}}>
                <div>
                    <Input 
                        placeholder="Write Something"
                        style={{width:"250px", marginRight:"10px"}}
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:"10px", width:"300px"}}>
                    <List
                        bordered
                        dataSource={data}
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