/* eslint-disable */

import { Children, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

import './App.scss';

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

export default App;