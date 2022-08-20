/* eslint-disable */

import { useState } from 'react';
import './TodoListItem.scss';

//TodoListItem 
function TodoListItem(props){
	let [bChecked,setBChecked] = useState(false);
	return(
		<div className='TodoListItem'>
			<label>
				<input type='checkbox' />
				{/* <input type='checkbox' checked={bChecked} onChange={(e)=> {
					setBChecked(e.target.value);
				}}
				/> */}
				{/* <span>{props.item}</span> */}
				<span>{props.items[props.i].text}</span>
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