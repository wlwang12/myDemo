import React, { Component } from 'react';
import {Row, Col} from 'antd';
import BarChart from './BarChart';
import TowBar from './TowBar';
import TopList from './TopList';

class Index extends Component {
    render() {
        return (
            <Row gutter={20}>
                <Col span={24} style={{padding: "0px 20px"}}>
                    <BarChart />
                </Col>

                <Col span={16} style={{padding: "20px"}}>
                    <TowBar height={350} />
                </Col>

                <Col span={8} style={{padding: "20px 20px 0px 0px"}}>
                    <TopList height={350} />
                </Col>

                <Col span={24} style={{padding: "20px"}}>
                    {/* <BarChart /> */}
                </Col>

                <Col span={24} style={{padding: "20px"}}>
                    {/* <BarChart /> */}
                </Col>
            </Row>
        );
    }
}

export default Index;