import  React, { Component } from 'react';
import  TodoFormContent from './../components/TodoFormContent'
import  { TodoListContent } from    './../components/TodoListContent'

export default class TodoListApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }

    pushToItems = (todo) => {
        const { items } = this.state;
        this.setState({
            items: [...items, todo]
        });
    };

    removeFromItems = (index) => {
        const { items } = this.state;
        items.splice(index, 1);

        // update state: array items
        this.setState({ items });
    };

    render() {
        /* Destructor */
        const { items } = this.state;

        return(
            <div id="app" className="container">
                <h1> TodoList ReactJS</h1>
                <TodoFormContent pushToItems={this.pushToItems}/>
                <TodoListContent items={items} removeFromItems={this.removeFromItems} />
            </div>
        );
    }
}