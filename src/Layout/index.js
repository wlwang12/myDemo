import React from 'react';
import { Layout } from 'antd';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import styles from './index.module.less';
const { Sider } = Layout;

export default class LayoutIndex extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    passCodeChange = () => {

    }

    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Sider className={styles.sider} trigger={null} collapsible collapsed={this.state.collapsed} width='220'>
                    <LeftComponent />
                </Sider>
                <Layout>
                    <RightComponent collapsed={this.state.collapsed} toggle={this.toggle}/>
                </Layout>
            </Layout>
        );
    }
}
