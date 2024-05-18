import React from 'react'
import { CategoryItem } from './CategoryItem'

function CategoryList({ catalog = [] }) {
	return (
		<div className='list'>
			{catalog.map((el, index) => (
				<CategoryItem key={el.strCategory} {...el} />
			))}
		</div>
	)
}

export { CategoryList }
