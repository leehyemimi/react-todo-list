/* eslint-disable */

import { Children, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import data from './components/data'
import './App.scss';

function App() {
	let [items, setItems] = useState(data);

	return (
		<TodoTemplate>
			<TodoInsert items={items} setItems={setItems} />
			<TodoList items={items} setItems={setItems}/>
		</TodoTemplate>
	);
}

export default App;