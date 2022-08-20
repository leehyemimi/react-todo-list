/* eslint-disable */

import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

//TodoInsert
function TodoInsert(props){
	function publish(){
		let copy = [...props.items];
		copy.unshift(props.inputItem);
		props.setItems(copy);
		props.setInputItem(''); //input
	}
	function text(){
		alert('할 일을 입력하세요');
	}

	return(
		<div className='TodoInsert'>
			<input type='text' value={props.inputItem} placeholder='할 일을 입력하세요' onChange={(e)=>{ 
				props.setInputItem(e.target.value)
			}} />
			<button onClick={()=>{
				props.inputItem != '' ? publish() : text();
				}}>
				<MdAdd></MdAdd>
			</button>
		</div>
	)
}

export default TodoInsert;