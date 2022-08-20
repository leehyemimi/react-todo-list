/* eslint-disable */

import React from 'react';
import './TodoTemplate.scss';


//TodoTemplate
function TodoTemplate({children}){
	return(
		<div className='todoTemplate'>
			<div className='todoTemplateTitle'>일정 관리</div>
			<div className='content'>
				{children}
			</div>
		</div>
	);
};

export default TodoTemplate;