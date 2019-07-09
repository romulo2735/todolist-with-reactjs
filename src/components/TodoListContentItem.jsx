import React, { Component } from 'react';

export default class TodoListContentItem extends Component{
    constructor(props){
        super(props);
    }

    onRemove = () => {
        this.props.removeFromItems(this.props.index)
    };

    render() {
        const { item } = this.props;
        return(
            <li>
                { item }
                <button type="submit" onClick={this.onRemove}> x </button>
            </li>
        );   
    }
}