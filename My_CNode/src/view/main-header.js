import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

export default class MainHeader extends Component {
    render () {
        return (<Layout.Header>
            <Row className="warp">
                <Col md={6} xs={24}>
                    <h1 id="logo">cNode</h1>
                </Col>
                <Col md={18} xs ={0}></Col>
            </Row>
        </Layout.Header>);
    }
}