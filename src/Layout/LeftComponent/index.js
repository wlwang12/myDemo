import React, { Component } from 'react';
import { Menu } from 'antd'
import { withRouter } from "react-router-dom";
import IconFont from 'src/iconfont';
import menus from './menu';
import styles from '../index.module.less';
const SubMenu = Menu.SubMenu;

class LeftComponent extends Component {

    state = {
        current: '',
        openKeys: [],
        rootSubmenuKeys: [],
    }

    componentDidMount(){
        setTimeout(() => { //不添加setTimeout会取不到下面的pathname
            let current = this.props.location.pathname;
            let openKeys = [], rootSubmenuKeys = [];
            menus.forEach(item=>{
                if(item.subMenus){
                    item.subMenus.forEach(ele=>{
                        if(ele.url === current){
                            openKeys = [String(item.id)];
                        }
                    })
                }
                rootSubmenuKeys.push(String(item.id))
            })
            this.setState({openKeys, rootSubmenuKeys, current});
        }, 50)
    }

    selectClick = ({ key }) => {
        this.setState({
            current:key
        })
        this.props.history.push(key);
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if(this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({
				openKeys
			});
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
    }

    renderMenu = (data) => data.map((item) => {
       
        if(item.subMenus && item.subMenus[0]){
            return (
                <SubMenu
                    key={item.id}
                    title={
                        <span>
                            <IconFont type={item.iconUrl} />
                            <span>{item.name}</span>
                        </span>
                    }
                >
                    {this.renderMenu(item.subMenus)}
                </SubMenu>
            )
        }else{
            if(item.iconUrl){
                return(<Menu.Item key={item.url}>
                    <IconFont type={item.iconUrl} />
                    <span>{item.name}</span>
                </Menu.Item>)
            }else{
                return <Menu.Item key={item.url}>{item.name}</Menu.Item>
            }
        }
    })

    render() {
        return (
            <React.Fragment>
                <div className={styles.logoBox}>
                    {/* <img src={require('./logo.png')} alt="logo"/> */}
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={this.state.current ? [this.state.current] : null}
                    openKeys={this.state.openKeys}
                    onClick={this.selectClick}
                    onOpenChange={this.onOpenChange}
                >
                    {this.renderMenu(menus)}
                </Menu>
            </React.Fragment>
        );
    }
}


export default withRouter(LeftComponent);