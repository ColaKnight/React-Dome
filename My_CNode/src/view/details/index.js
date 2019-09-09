import React, { Component } from "react";
import TxtDetails from "./txtDetails";
import ReplayList from "./replayList";
import data from "./data";

class Details extends Component {
    render () {
        return (<div className="wrap">
            <TxtDetails 
                loading={false}
                data={data.data}
            />
            <ReplayList 
                loading={false}
                replies={data.data.replies}
                replyCount={data.data.reply_count}
            />
        </div>);
    }
}

export default Details;