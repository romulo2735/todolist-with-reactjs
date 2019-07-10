import React, { Component } from 'react';

export default class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: '',
        }
    }

    onAdd = (e) => { e.preventDefault();
        const { todo } = this.state;
        
        if (todo) {
            this.props.pushToItems(todo);
            this.setState({
                todo: '',
            })
        }
    };

    onChange = (e) => {
        this.setState({
            todo: e.target.value
        });
    };

    render(){
        const { todo } =  this.state;

        return(
            <div>
                <div className="form-group">
                    <input  className="form-control" type="text" value={todo} name="todo" placeholder="Enter Todo here" onChange={ this.onChange }/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit" onClick={ this.onAdd }>Create</button>
                </div>
            </div>
        )
    }
}