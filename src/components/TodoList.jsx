import React, { Component } from 'react';
import TodoForm from './TodoForm';

export default class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
            todo: '',
        }
    }

    onChange = (event) => {
        this.setState({
            todo: event.target.value
        });
    };

    pushItems = (event) => {
        event.preventDefault();
        this.setState({
            items: [ ...this.state.items, this.state.todo ],
            todo: '',
        }); 
    };

    render() {
        // destructor
        const { items } = this.state;

        return(
            <div>
                <p> TodoList </p>
                <TodoForm/>
                <ul>
                {
                    items.map((item,index) => (
                        <li key={ index }> { item } </li>
                    ))
                }
                </ul>
            </div>
        );  
    }
}