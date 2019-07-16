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
            <li className="list-group-item">
                { item }
                <button className="btn btn-danger" type="submit" onClick={this.onRemove()}>remove</button>
            </li>
        );   
    }
}
