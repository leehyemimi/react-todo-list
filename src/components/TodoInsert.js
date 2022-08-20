/* eslint-disable */
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

//TodoInsert
function TodoInsert(props){
	let [inputItem, setInputItem] = useState('');
	function publish(){
		let copy = [...props.items];
		copy.unshift({text : inputItem,checked : false});
		props.setItems(copy);
		setInputItem(''); //input
	}
	function text(){
		alert('할 일을 입력하세요');
	}

	return(
		<div className='TodoInsert'>
			<input type='text' value={inputItem} placeholder='할 일을 입력하세요' onChange={(e)=>{ 
				setInputItem(e.target.value)
			}} />
			<button onClick={()=>{
				inputItem != '' ? publish() : text();
				}}>
				<MdAdd></MdAdd>
			</button>
		</div>
	)
}

export default TodoInsert;