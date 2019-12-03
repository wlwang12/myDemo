import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend, Label } from "bizcharts";
import DataSet from "@antv/data-set";
import {Card, Icon} from 'antd';
import NoData from '../NoData/NoDataComponent';

let ds;

class BarChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            height: 0
        }
    }

    getData = () => {
        let dataList = [{
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 0.0,
			"电子设备": 0.0,
			"collegeName": "徐州工程学院",
			"机电设备": 0.0,
			"仪器仪表": 0.0,
			"印刷机械": 0.0,
			"total": 0.0,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.0
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 6.76,
			"电子设备": 7.52,
			"collegeName": "党委办公室",
			"机电设备": 0.0,
			"仪器仪表": 0.58,
			"印刷机械": 3.63,
			"total": 19.06,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.57
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 4.77,
			"电子设备": 10.73,
			"collegeName": "纪委办公室（监察处）",
			"仪器仪表": 1.7,
			"机电设备": 0.0,
			"印刷机械": 0.59,
			"total": 17.84,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.05
		}, {
			"图书": 1.09,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 4.83,
			"电子设备": 13.44,
			"collegeName": "党委组织部",
			"仪器仪表": 1.25,
			"机电设备": 0.0,
			"印刷机械": 3.59,
			"total": 24.33,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.13
		}, {
			"图书": 0.93,
			"文物及陈列品": 12.68,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 5.87,
			"电子设备": 82.36,
			"collegeName": "党委宣传部（党校、校报编辑部、新闻中心）",
			"机电设备": 0.9,
			"仪器仪表": 21.39,
			"印刷机械": 0.82,
			"total": 125.11,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.16
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 3.19,
			"电子设备": 1.83,
			"collegeName": "党委统战部",
			"机电设备": 0.0,
			"仪器仪表": 0.0,
			"印刷机械": 0.5,
			"total": 5.52,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.0
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 1.99,
			"电子设备": 1.65,
			"collegeName": "机关党委",
			"仪器仪表": 0.0,
			"机电设备": 0.0,
			"印刷机械": 0.48,
			"total": 4.12,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.0
		}, {
			"图书": 0.48,
			"文物及陈列品": 2.55,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 74.26,
			"电子设备": 162.46,
			"collegeName": "院长办公室",
			"仪器仪表": 20.13,
			"机电设备": 160.07,
			"印刷机械": 7.56,
			"total": 433.28,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 5.77
		}, {
			"图书": 6.15,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 17.04,
			"电子设备": 166.89,
			"collegeName": "教务处（教师教学发展中心）",
			"机电设备": 1.05,
			"仪器仪表": 12.59,
			"印刷机械": 2.77,
			"total": 207.41,
			"工具、量具和器具": 0.0,
			"文体设备": 0.75,
			"标本模型": 0.0,
			"行政办公设备": 0.17
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 11.14,
			"电子设备": 15.46,
			"collegeName": "人事处（师资办公室）",
			"仪器仪表": 1.01,
			"机电设备": 1.16,
			"印刷机械": 0.84,
			"total": 29.61,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.0
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 16.32,
			"电子设备": 112.88,
			"collegeName": "财务处",
			"仪器仪表": 7.76,
			"机电设备": 1.13,
			"印刷机械": 3.77,
			"total": 155.25,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 13.39
		}, {
			"图书": 2.46,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 1.28,
			"被服装具": 0.0,
			"家具": 3218.68,
			"电子设备": 88.92,
			"collegeName": "党委学生工作部（学生处、人武部）",
			"机电设备": 21.59,
			"仪器仪表": 11.33,
			"印刷机械": 2.47,
			"total": 3348.88,
			"工具、量具和器具": 0.0,
			"文体设备": 0.68,
			"标本模型": 0.1,
			"行政办公设备": 1.37
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 13.17,
			"电子设备": 233.72,
			"collegeName": "党委保卫部（保卫处）",
			"仪器仪表": 20.7,
			"机电设备": 6.05,
			"印刷机械": 0.23,
			"total": 278.09,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 4.22
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 3.81,
			"电子设备": 10.9,
			"collegeName": "审计处",
			"仪器仪表": 1.61,
			"机电设备": 0.0,
			"印刷机械": 0.0,
			"total": 16.32,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.0
		}, {
			"图书": 1.16,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 24.02,
			"电子设备": 33.87,
			"collegeName": "科研处（社科处、学科建设与研究生管理处）",
			"机电设备": 0.0,
			"仪器仪表": 44.21,
			"印刷机械": 0.84,
			"total": 104.1,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.0
		}, {
			"图书": 8.2,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 2.35,
			"电子设备": 8.34,
			"collegeName": "产业处、大学科技园管理办公室",
			"仪器仪表": 2.39,
			"机电设备": 0.0,
			"印刷机械": 0.62,
			"total": 21.9,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.0
		}, {
			"图书": 0.0,
			"文物及陈列品": 0.0,
			"卫生医疗器械": 0.0,
			"被服装具": 0.0,
			"家具": 11.67,
			"电子设备": 43.78,
			"collegeName": "招生就业处",
			"仪器仪表": 4.49,
			"机电设备": 1.99,
			"印刷机械": 3.48,
			"total": 65.8,
			"工具、量具和器具": 0.0,
			"文体设备": 0.0,
			"标本模型": 0.0,
			"行政办公设备": 0.39
        }]
        // let fields = ["仪器仪表", "机电设备", "电子设备", "印刷机械", "卫生医疗器械", "文体设备", "标本模型", "文物及陈列品", "图书", "工具、量具和器具", "家具", "行政办公设备", "被服装具"]

        let newData = [];
        dataList.forEach(
            (item) => {
                newData.push({
                    name: item.collegeName,
                    "仪器仪表": item['仪器仪表'],
                    "卫生医疗器械": item['卫生医疗器械'],
                    "印刷机械": item['印刷机械'],
                    "图书": item['图书'],
                    "家具": item['家具'],
                    "工具、量具和器具": item['工具、量具和器具'],
                    // "房屋及构筑物": item['房屋及构筑物'],
                    "文体设备": item['文体设备'],
                    "文物及陈列品": item['文物及陈列品'],
                    "机电设备": item['机电设备'],
                    "标本模型": item['标本模型'],
                    "电子设备": item['电子设备'],
                    "行政办公设备": item['行政办公设备'],
                    "被服装具": item['被服装具'],
                    total: item.total,
                }) 
            }
        )
        this.setState({
            data: newData,
            height: newData.length*40
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {

        const height = this.state.height || 350; // 高度设置，默认值
        const label = {
            offset: 10, // 数值，设置坐标轴文本 label 距离坐标轴线的距离
            textStyle: {
                textAlign: 'end', // 文本对齐方向，可取值为： start center end
            },
            formatter (text, item, index) {
                return text
            }
        }
        
        let fields = [],
			data = this.state.data,
            nameKey;
            
        if(data && data[0]) {
            nameKey = Object.keys(data[0])[0]; // 获取json第一个对象的第一个键名称
            // 获取json对象子节点除去第一个键的其他键字段集合
            // Object.keys(data[0]).forEach((item, index) => {
            // 	if(index !== 2) {
            // 		fields.push(item);
            // 	}
            // })
            Object.keys(data[0]).forEach((item, index) => {
                // console.log(index,"1111")
                if(index !== 0 && item !=='total') {
                    fields.push(item);
                    // console.log(item,"00000")
                }
            })
            // 分组图
            ds = new DataSet({
                state:{
                    start: 0,
                    end: data.length-1
                }
            }); // dateset数据集方法
            const dv = ds.createView().source(data); // 数据转换
            // 初始化参数
            dv.source(data).transform({
                type: 'fold',
                fields: fields,
                key: 'type',
                value: 'value'
            }).transform({
                type: 'filter',
                callback: obj => {
                    const name = obj.name;
                    let curIndex;
                    this.state.data.forEach(
                        (item, index) => {
                            if (item.name === name) {
                                curIndex = index
                            }
                        }
                    )
                    return curIndex <= ds.state.end && curIndex >= ds.state.start;
                }
            })

            return (
                <Card
                    title={
                        <div>柱状图
                            <p style={{color:"#ccc", fontSize: 12, fontWeight: 400}}>导出柱状图</p>
                        </div>
                    }
                    extra={<Icon style={{cursor: "pointer"}} type="arrow-down" />}
                >
                    <Chart height={400} data={dv} forceFit>
                        <Legend />
                        <Coord transpose />
                        <Axis name={nameKey} label={label} />
                        <Axis name="value" />
                        <Tooltip />
                        <Geom
                            type="intervalStack"
                            position={nameKey+"*value"}
                            color={['type',"#66091E","#5ddfcf","#4ecb73","#fbd437","#eaa674","#8a7bd4","#975fe5","#749fea","#36cbcb","#74b1ea","#5254cf","#435188","#3b1ff","#5adfcf","#4ecb71","#fbd457","#eab674","#8b7bd4","#925fe5","#749feb","#36cacb","#74b1eb","#5251cf","#435288","#36caca","#74b2eb"]}
                        >
                            <Label
								content={[nameKey + '*value*total', (nameKey, value,total) => total]}
								formatter={(text, item, index)=>{
									// text 为每条记录 x 属性的值
									// item 为映射后的每条数据记录，是一个对象，可以从里面获取你想要的数据信息
									// index 为每条记录的索引
									if(index>=data.length*12){
										return text
									}else{
										return ''
									}

								}}
							/>
                        </Geom>
                    </Chart>
                </Card>
            );
        } else {
            // 无数据时
            return(<NoData height={height} data={'nodata'}/>);
        }
    }
}

export default BarChart;