/* eslint-disable */

import React from 'react';
// import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

//TodoList
function TodoList({ items, onRemove, onToggle }) {
	return (
		<div className='todoList'>
			{
				items.map(function (item, i) {
					return (
						<TodoListItem item={item} onRemove={onRemove} onToggle={onToggle} key={i} />
					);
				})
			}
		</div>
	)
}

export default TodoList;