import React, { Component } from "react";
import { Layout } from "antd";

export default class MainFooter extends Component {
    render () {
        return <Layout.Footer style = {{
            textAlign:"center"
        }}>
            京ICP证030173号  京公网安备11000002000001号
        </Layout.Footer>;
    }
}