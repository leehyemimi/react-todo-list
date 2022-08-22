/* eslint-disable */

import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

//TodoInsert
function TodoInsert({onInsert}){
	const [value, setValue] = useState('');
	function onClick(){
		if(value != ''){
			onInsert(value);
			setValue(''); //input value 값 초기화
			[onInsert, value]
		}else{
			alert('할 일을 입력하세요');
		}
	}
	function onChange(e){
		setValue(e.target.value)
	}

	return(
		<div className='TodoInsert'>
			<input type='text' value={value} placeholder='할 일을 입력하세요' onChange={onChange} />
			<button onClick={onClick}>
				<MdAdd></MdAdd>
			</button>
		</div>
	)
}

export default TodoInsert;