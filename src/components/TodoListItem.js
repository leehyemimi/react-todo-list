/* eslint-disable */

import React, { useCallback } from 'react';
import './TodoListItem.scss';

//TodoListItem 
function TodoListItem({ item, onRemove, onToggle }) {
	const { id, text, checked } = item;
	return (
		<div className='TodoListItem'>
			<label>
				<input type='checkbox' checked={checked} onChange={() => onToggle(id)} />
				<span>{text}</span>
			</label>

			<button onClick={() => onRemove(id)}>삭제</button>
		</div >
	)
};

export default TodoListItem;