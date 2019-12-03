import React, { Component } from 'react';
import {Card} from 'antd';
import DownLoad from '../../DownLoad';

class TopList extends Component {
    render() {
        return (
            <div id="toplist">
                <Card
                    title={
                        <div>Top图
                            <p style={{color:"#ccc", fontSize: 12, fontWeight: 400}}>导出Top图</p>
                        </div>
                    }
                    extra={
                        <DownLoad 
                            downloadChart={{
                                id: "toplist",
                                title: "toplist"
                            }} 
                        />
                    }
                >

                </Card>
            </div>
        );
    }
}

export default TopList;