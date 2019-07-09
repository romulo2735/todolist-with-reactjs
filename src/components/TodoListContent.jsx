import  React, { Component } from 'react';
import  TodoListContentItem from './TodoListContentItem';

export const TodoListContent = (props) => {
    const { items } = props;
    return (
        <ul>
        {
            items.map((item,index) => (
                <TodoListContentItem  key={index} item={item}/>
            ))
        }
        </ul>
    )
};