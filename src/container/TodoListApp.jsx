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

    render() {
        /* Destructor */
        const { items } = this.state;

        return(
            <div id="app"> 
                <TodoFormContent pushToItems={this.pushToItems}/>
                <TodoListContent items={items} />
            </div>
        );
    }
}