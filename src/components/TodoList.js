/* eslint-disable */

import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

//TodoList
function TodoList(props){
	return (
		<div className='todoList'>
			{
				props.items.map(function(item,i){
					return (
						<TodoListItem key={item.id} setItems={props.setItems} items={props.items} item={item} i={i}/>
					);
				})
			}
		</div>
	)
}

export default TodoList;