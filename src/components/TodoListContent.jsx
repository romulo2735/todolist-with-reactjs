import  React, { Component } from 'react';
import  TodoListContentItem from './TodoListContentItem';

export const TodoListContent = (props) => {
    const { items, removeFromItems } = props;
    return (
        <ul className="list-group">
        {
            items.map((item,index) => (
                <TodoListContentItem  key={index} index={index} item={item} removeFromItems={removeFromItems()}/>
            ))
        }
        </ul>
    )
};