/* eslint-disable */

import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

//TodoList
function TodoList({ todos, onRemove, onToggle }) {
	const rowRenderer = useCallback(
		({ index, key, style }) => {
			const todo = todos[index];
			return (
				<TodoListItem
					todo={todo}
					key={key}
					onRemove={onRemove}
					onToggle={onToggle}
					style={style}
				/>
			);
		},
		[onRemove, onToggle, todos],
	);
	return (
		<List
			className='TodoList'
			width={512} // 전체 크기
			height={513} // 전체 높이
			rowCount={todos.length} // 항목 개수
			rowHeight={45} // 항목 높이
			rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
			list={todos} // 배열
			style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
		/>
	);


	// return (
	// 	<div className='todoList'>
	// 		{
	// 			todos.map(function (todo, i) {
	// 				return (
	// 					<TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={i} />
	// 				);
	// 			})
	// 		}
	// 	</div>
	// )
}

export default React.memo(TodoList);