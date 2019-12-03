import React from 'react';
import Head from './Head';
import Content from './Content';

export default class RightComponent extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Head collapsed={this.props.collapsed} toggle={this.props.toggle} />
                <Content/>
            </React.Fragment>
        )
    }
}