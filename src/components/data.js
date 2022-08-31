// let data = 
// [
// 	{
// 		id: 1,
// 		text: '리액트의 기초 알아보기',
// 		checked: true,
// 	},
// 	{
// 		id: 2,
// 		text: '컴포넌트 스타일링해 보기',
// 		checked: true,
// 	},
// 	{
// 		id: 3,
// 		text: '일정 관리 앱 만들어 보기',
// 		checked: false,
// 	}
// ]

function data() {
	const array = [];
	for (let i = 1; i <= 1000; i++) {
		array.push({
			id: i,
			text: `할 일 ${i}`,
			checked: false,
		});
	}
	return array;
}

export default data