import React from 'react';
import {Input, Icon, Button} from 'antd';
import styles from './index.module.less';


export default class Login extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleChange(type, e){
        if(type === 1){
            this.setState({username: e.target.value});
        }else if(type === 2){
            this.setState({password: e.target.value});
        }
    }

    login = () => {
        localStorage.setItem('loginStatus', true);
        window.location.reload();
    }

    render(){
        return (
            <div className={styles.loginWrapper}>
                <div className={styles.loginBox}>
                    <div className={styles.loginCenter}>
                        <img src={require('./img/logo.png')} alt="logo"/>
                        <h3>大数据分析平台</h3>
                        <div className={styles.loginForm}>
                            <ul>
                                <li>
                                    {/* <label>用户名:</label> */}
                                    <Input 
                                        value={this.state.username}
                                        onChange={this.handleChange.bind(this, 1)}
                                        placeholder="请输入用户名"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    ></Input>
                                </li>
                                <li>
                                    {/* <label>密码:</label> */}
                                    <Input 
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleChange.bind(this, 2)}
                                        placeholder="请输入密码"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    ></Input>
                                </li>
                            </ul>
                            <Button type="primary" onClick={this.login} className={styles.loginButton}>登录</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}