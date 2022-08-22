/* eslint-disable */

import { useState  } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

//TodoInsert
function TodoInsert({items, setItems, onInsert}){
	let [value, setValue] = useState('');
	
	function publish(){
		//let copy = [...items];
		//copy.unshift({text : value,checked : false});
		//setItems(copy);
		onInsert(value);
		setValue(''); //input value 값 초기화
		[onInsert, value]
	}
	function text(){
		alert('할 일을 입력하세요');
	}

	return(
		<div className='TodoInsert'>
			<input type='text' value={value} placeholder='할 일을 입력하세요' onChange={(e)=>{ 
				setValue(e.target.value)
			}} />
			<button onClick={()=>{
				value != '' ? publish() : text();
				}}>
				<MdAdd></MdAdd>
			</button>
		</div>
	)
}

export default TodoInsert;