/* eslint-disable */

import React, { useCallback } from 'react';
import './TodoListItem.scss';

//TodoListItem 
function TodoListItem({ todo, onRemove, onToggle, style }) {
	const { id, text, checked } = todo;
	return (
		<div className='TodoListItem-virtualized' style={style}>
			<div className='TodoListItem'>
				<label>
					<input type='checkbox' checked={checked} onChange={() => onToggle(id)} />
					<span>{text}</span>
				</label>

				<button onClick={() => onRemove(id)}>삭제</button>
			</div>
		</div>
	)
};

export default React.memo(TodoListItem);