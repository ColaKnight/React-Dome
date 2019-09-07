import React, { Component } from "react";
import { Card } from "antd";
import data from "./data";

class Book extends Component {
    render () {
        return (<div className="wrap">
            {data.map((item, index) => (<Card
                title={item.title}
                type="inner"
                key={index}
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html:item.content
                    }}
                >

                </div>
            </Card>))}
        </div>);
    }
}

export default Book;