import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Login from './Login';
import Layout from './Layout' ;
import Loading from './Loading';
import './index.less';

moment.locale('zh-cn');

class App extends React.Component {
    render() {
        let loginStatus = localStorage.getItem("loginStatus");//从localStorage中取登录状态
        return (<ConfigProvider locale={zhCN}>
                <Router>
                    <React.Fragment>
                        {loginStatus==="true"?
                            <Layout/>://登录状态跳转到主页
                            <Login/>//未登录状态跳转到登录页
                        }
                        <Loading/>
                    </React.Fragment>
                </Router>
        </ConfigProvider>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
