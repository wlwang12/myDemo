import React, { Component } from 'react';
import {Row, Col} from 'antd';
import BarChart from './BarChart';

class Index extends Component {
    render() {
        return (
            <Row gutter={20}>
                <Col span={24}>
                    <BarChart />
                </Col>
            </Row>
        );
    }
}

export default Index;