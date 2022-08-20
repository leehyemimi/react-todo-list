/* eslint-disable */

import React from 'react';
import './TodoListItem.scss';

//TodoListItem 
function TodoListItem(props){
	return(
		<div className='TodoListItem'>
			<label>
				<input type='checkbox' />
				<span>{props.item}</span>
				{/* <span>{props.items[props.i]}</span> */}
			</label>
			<button onClick={()=>{
				let copy = [...props.items];
				copy.splice(props.i,1);
				props.setItems(copy);
			}}>삭제</button>
		</div>
	)
};

export default TodoListItem;