/* eslint-disable */

import { useState } from 'react';
import './TodoListItem.scss';

//TodoListItem 
function TodoListItem({items,setItems,i,onInsert}){
	return(
		<div className='TodoListItem'>
			<label>
				<input type='checkbox' checked={items[i].checked} onChange={(e)=> {
					let copy = [...items];
					copy[i].checked = e.target.checked;
					setItems(copy);
					}}
				/>
				<span>{items[i].text}</span>
			</label>
			<button onClick={()=>{
				let copy = [...items];
				copy.splice(i,1);
				setItems(copy);
				//onInsert(inputItem);
			}}>삭제</button>
		</div>
	)
};

export default TodoListItem;