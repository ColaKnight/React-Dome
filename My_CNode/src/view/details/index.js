import React, { Component } from "react";
import TxtDetails from "./txtDetails";
import data from "./data";

class Details extends Component {
    render () {
        return (<div className="wrap">
            <TxtDetails 
                loading={false}
                data={data.data}
            />
        </div>);
    }
}

export default Details;