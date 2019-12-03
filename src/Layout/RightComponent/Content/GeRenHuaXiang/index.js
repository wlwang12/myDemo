import React, { Component, Fragment } from 'react';
import {Tabs} from 'antd';
import BarChart from './BarChart';

const TabPane = Tabs.TabPane;

class Index extends Component {

    state = {
        // filterValue: {},
        tabs:[]
    };
	
	getFilterValue = (filterValue) => {
		this.setState({filterValue})
	}
    
    componentDidMount() {
        this.setState({
            tabs: [
                {name: "柱状图", id: 111},
                // {name: "学生管理", id: 112},
                // {name: "一卡通", id: 113},
                // {name: "就业分析", id: 114}
            ]
        })
    }

    getTabs = id => {
        switch(id){
            case 111:
            return <BarChart />
            // case 112:
            // return <XueShengGuanLi filterValue = { this.state.filterValue }/>
            // case 113:
            // return <YiKaTong filterValue = { this.state.filterValue }/>
            // case 114:
            // return <JiuYeFenXi filterValue = { this.state.filterValue }/>
            default:
            return null
        }
    }

    render() {
        const {tabs}=this.state;
		return (
			<Fragment>
                {/* <Filter getFilterValue = {this.getFilterValue} /> */}
                <Tabs defaulActiveKey={111}>
                {
                    tabs.map(item=>(
                        <TabPane tab={item.name} key={item.id}>
                            {this.getTabs(item.id)}
                        </TabPane>
                    ))
                }                    
                </Tabs>
			</Fragment>
		)
    }
}

export default Index