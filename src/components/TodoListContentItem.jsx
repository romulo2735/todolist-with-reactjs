import React, { Component } from 'react';

export default class TodoListContentItem extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const { item } = this.props;
        return(
            <li>{ item }</li>
        );   
    }
}