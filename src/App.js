/* eslint-disable */

import './App.scss';
import { Children, useState } from 'react';
import { MdAdd } from 'react-icons/md'

function App() {
	let [items, setItems] = useState(['일정1','일정2','일정3']);
	let [inputItem, setInputItem] = useState('');

	return (
		<TodoTemplate>
			<TodoInsert setInputItem={setInputItem} items={items} inputItem={inputItem} setItems={setItems} />
			<TodoList items={items} setItems={setItems}/>
		</TodoTemplate>
	);
}

//TodoTemplate
function TodoTemplate({children}){
	return(
		<div className='todoTemplate'>
			<div className='app-title'>일정 관리</div>
			<div className='content'>
				{children}
			</div>
		</div>
	);
};

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
		<div className='add-list'>
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

//TodoListItem 
function TodoListItem(props){
	return(
		<div className='item'>
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

//TodoList
function TodoList(props){
	return (
		<div className='todoList'>
			{
				props.items.map(function(item,i){
					return (
						<TodoListItem setItems={props.setItems} items={props.items} item={item} i={i}/>
					);
				})
			}
		</div>
	)
}


export default App;
