import React, { Component } from 'react';
import {Card} from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend, Label } from "bizcharts";
import DataSet from "@antv/data-set";
import DownLoad from '../../DownLoad';
import NoData from '../../NoData/NoDataComponent';

class TowBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            secondData:[],
            total: 0,
            kuannanTotal: 0
        }
    }

    getData = () => {
        let res = {"success":true,"msg":"成功","obj":[{"xueyou1":5295,"xuezhong1":5085,"xueyou":"0.2377","xuecha":"0.0725","xuezhong":"0.2282","xueba":"0.0105","xueliang":"0.4511","name":"全校学生","xuecha1":1616,"xueba1":233,"xueliang1":10050},{"xueyou1":1427,"xuezhong1":796,"xueyou":"0.3199","xuecha":"0.0343","xuezhong":"0.1784","xueba":"0.0186","xueliang":"0.4488","name":"家庭经济困难学生","xuecha1":153,"xueba1":83,"xueliang1":2002}],"errorCode":null}

        if (res.success) {
            let newData = [];
            let secondData = [];
            res.obj.forEach((item) => {
                newData.push({
                    name: item.name,
                    "学霸": Number((item.xueba * 100).toFixed(2)),
                    "学优": Number((item.xueyou * 100).toFixed(2)),
                    "学中": Number((item.xuezhong * 100).toFixed(2)),
                    "学良": Number((item.xueliang * 100).toFixed(2)),
                    "学差": Number((item.xuecha * 100).toFixed(2)),
                })
            })

            res.obj.forEach((item) => {
                secondData.push({
                    name: item.name,
                    "baPercent": item.xueba1,
                    "youPercent": item.xueyou1,
                    "zhongPercent": item.xuezhong1,
                    "liangPercent": item.xueliang1,
                    "chaPercent": item.xuecha1,
                })
            })
            this.setState({
                data: newData,
                secondData
            })
        } else {
            this.setState({
                data: [],
                secondData:[]
            })
        }
    }

    componentDidMount() {
        this.getData()
    }

    render() {

    const height = this.props.height || 350; // 高度设置，默认值
    const ds = new DataSet();
    const dv = ds.createView().source(this.state.data);
    dv.transform({
      type: "fold",
      fields: ["学霸", "学优", "学良", "学中", "学差"],
      key: "段位",
      value: "平均成绩"
    });

    const dv1 = ds.createView().source(this.state.secondData);
    dv1.transform({
      type: "fold",
      fields: ['baPercent', 'youPercent', 'liangPercent', 'zhongPercent', 'chaPercent'],
      key: "段位",
      value: "平均成绩"
    });

    let i = 0;

        return (
            <div id="shaungzhutu">
                <Card
                    title={
                        <div>双柱状图
                            <p style={{color:"#ccc", fontSize: 12, fontWeight: 400}}>导出双柱状图</p>
                        </div>
                    }
                    extra={
                        <DownLoad 
                            downloadChart={{
                                id: "shaungzhutu",
                                title: "双柱状图"
                            }} 
                        />
                    }
                >
                    {
                        this.state.data && this.state.data.length > 0
                            ?
                            <Chart 
                                height={this.props.height} 
                                data={dv} 
                                forceFit
                                onGetG2Instance={(chartIns) => { this.setState({ chartIns }) }}
                                padding={[50, 40, 30, 40]}
                            >
                            <Axis name="段位" />
                            <Axis name="平均成绩" 
                                label={{
                                formatter: val => `${val}%`
                                }} 
                            />
                            <Legend />
                            <Tooltip
                                crosshairs={{
                                type: "y"
                                }}
                            />
                            <Geom
                                size={45}
                                type="interval"
                                position="段位*平均成绩"
                                color={['name', this.props.colors]}
                                adjust={[
                                {
                                    type: "dodge",
                                    marginRatio: 1 / 2
                                }
                                ]}
                                // tooltip={['段位*平均成绩', (name, value) => {
                                //   return {
                                //     //自定义 tooltip 上显示的 title 显示内容等。
                                //     // title: name,
                                //     name: name,
                                //     value: value + "%"
                                //   };
                                // }]}
                            >
                                <Label 
                                content={[
                                    '段位*平均成绩', 
                                    (name, value) => {
                                    let newValue = '';
                                    newValue = value + "% \n（" + dv1.rows[i]['平均成绩'] + "）";
                                    i++;
                                    if(i === 10) i = 0;
                                    return newValue;
                                    }
                                ]} 
                                />
                            </Geom>
                            </Chart>
                            :
                            <NoData data={'nodata'} height={height} />
                        }
                </Card>
            </div>
        );
    }
}

export default TowBar;