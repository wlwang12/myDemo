import React from 'react';
import { Layout, Icon, Popover } from 'antd';
import { withRouter } from "react-router-dom";
import menus from 'src/Layout/LeftComponent/menu';
import styles from '../index.module.less';
const { Header } = Layout;

class Head extends React.Component {

    state = {
        breadcrumb: '',
    }

    componentDidMount(){
        this.getBreadcrumb();
    }

    componentDidUpdate(prevProps){
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            this.getBreadcrumb();
        }
    }

    getBreadcrumb(){
        setTimeout(() => { //不添加setTimeout会取不到下面的pathname
            let { breadcrumb } = this.state;
            let pathname = this.props.location.pathname;
            menus.forEach(item => {
                if(item.subMenus && item.subMenus[0]){
                    item.subMenus.forEach(ele => {
                        if(ele.url === pathname){
                            breadcrumb = `${item.name} / ${ele.name}`;
                        }
                    })
                }else {
                    if(item.url === pathname){
                        breadcrumb = item.name;
                    }
                }
            })
            this.setState({breadcrumb});
        }, 50)
    }

    toggle = () => {
        this.props.toggle();
    };

    logout = () => {
        localStorage.clear();
        window.location.href = window.location.origin;
    }

    render(){
        return (
            <Header>
                <div className={styles.breadcrumb}>
                    {/* <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        style={{marginRight: 10}}
                    /> */}
                    {this.state.breadcrumb}
                </div>
                <div className={styles.logoutBox}>
                    <span>欢迎，Administrator</span>
                    <Popover 
                        content={
                            (
                                <div className={styles.exit}>
                                    <p onClick={this.passCodeChange} style={{cursor: 'pointer'}}><Icon type="form" style={{marginRight:"8px"}} />修改密码</p>
                                    <p onClick={this.logout} style={{cursor: 'pointer'}}><Icon type="poweroff" style={{marginRight:"8px"}} />退出登录</p>
                                </div>
                            )
                        }
                        trigger="hover" placement="bottomLeft"
                    >
                        <Icon className={styles.setting} type="setting"/>
                    </Popover>
                </div>
            </Header>
        )
    }
}

export default withRouter(Head);