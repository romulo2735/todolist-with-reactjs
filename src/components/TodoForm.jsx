import React, { Component } from 'react';

export default class TodoForm extends Component {
    constructor(props){
        console.log(props);
        super(props);

        this.state = {
            todo: '',
        }
    }

    onAdd = (e) => { e.preventDefault();
        const { todo } = this.state;
        
        if (todo) {
            this.props.pushToItems(todo);    
        }
    };

    onChange = (event) => {
        this.setState({
            todo: event.target.value
        });
    };

    render(){
        return(
            <div> 
                <input type="text" name="todo" placeholder="Enter Todo here" onChange={ this.onChange }/>
                <button type="submit" onClick={ this.onAdd } > Create </button>
            </div>
        )
    }
}