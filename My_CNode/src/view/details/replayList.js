import React, { Component } from "react";
import { Card, Avatar, List } from "antd";
import { Link } from "react-router-dom";

class ReplayList extends Component {
    render () {
        let {loading, replyCount, replies} = this.props;
        return (
            <Card
                loading={loading}
                title={replyCount+"条回复"}
                type="inner"
            >
                <List
                    itemLayout="vertical"
                    dataSource={replies}
                    renderItem={(item)=>(
                        <List.Item
                            key={item.id}
                            extra={item.ups.length>0?
                            <span>有{item.ups.length}回复很赞</span>:""}
                        >
                            <List.Item.Meta 
                                avatar={<Avatar src={item.author.avatar_url}/>}
                                description={<p>
                                                <Link to={"/user/"+item.author.loginname}>
                                                    {item.author.loginname}
                                                </Link>
                                                <span
                                                    style={{marginLeft:"5px"}}
                                                >
                                                    发表于:{item.create_at.split("T")[0]}
                                                </span>
                                            </p>}
                            />
                        </List.Item>
                    )}
                >
                </List>
            </Card>);
    }
}

export default ReplayList;