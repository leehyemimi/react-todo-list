/* eslint-disable */

import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

//TodoList
function TodoList({items,setItems}){
	return (
		<div className='todoList'>
			{
				items.map(function(item,i){
					return (
						<TodoListItem key={i} setItems={setItems} items={items} item={item} i={i}/>
					);
				})
			}
		</div>
	)
}

export default TodoList;