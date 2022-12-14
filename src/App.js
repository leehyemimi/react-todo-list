/* eslint-disable */

import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import data from './components/data'
import './App.scss';

function App() {
	const [todos, setTodos] = useState(data);
	const todoTotal = todos.filter(todo => todo.checked == false);
	const doneTotal = todos.filter(todo => todo.checked == true);

	//고유값으로 사용될 id
	// redf를 사용하여 변수 담기
	const nextId = useRef(4);
	const onInsert = useCallback(
		text => {
			const todo = {
				id: nextId.current,
				text,
				checked: false,
			};
			setTodos(todos.concat(todo)); //사용방법은 간단하게 기존배열에 [].concat(데이터) 형식으로 붙이면 배열의 마지막 부분에 배열이 추가됩니다. 기존에 .push()와 같은 함수를 사용 하지않고 concat() 을 사용 하는 이유는 .push()는 순수함수가 아니기 때문에 개발을 하는데 있어서 문제가 발생하여 순수함수로 작업을 하여야합니다. 
			nextId.current += 1; //nextId 1씩 더하기
		},
		[todos],
	);

	const onRemove = useCallback(
		id => {
			setTodos(todos.filter(todo => todo.id !== id));
		},
		[todos],
	);

	const onToggle = useCallback(
		id => {
			setTodos(
				todos.map(todo =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo,
				),
			);
		},
		[todos],
	);

	return (
		<TodoTemplate>
			<div className='total'>{'할일 ' + todoTotal.length + '개 남음'}</div>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} checkedList={false} />
			<div className='total'>{'완료(' + doneTotal.length + '개)'}</div>
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} checkedList={true} />
		</TodoTemplate>
	);
}

export default App;