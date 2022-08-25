/* eslint-disable */

import React from 'react';
import './TodoListItem.scss';

//TodoListItem 
function TodoListItem({ items, setItems, i }) {
	function onChangeCheck(e) {
		let copy = [...items];
		copy[i].checked = e.target.checked;
		setItems(copy);
	}
	function del() {
		let copy = [...items];
		copy.splice(i, 1);
		copy[i].checked = copy[i].checked;
		setItems(copy);
	}

	return (
		<div className='TodoListItem'>
			<label>
				<input type='checkbox' checked={items[i].checked} onChange={onChangeCheck} />
				<span>{items[i].text}</span>
			</label>
			<button onClick={del}>삭제</button>
		</div>
	)
};

export default TodoListItem;