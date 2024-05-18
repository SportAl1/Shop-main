import React, { useState, useEffect } from 'react'
import { getAllCategories } from './api'
import { CategoryList } from '../CategoryList'
import { Preloader } from '../layout/Preloader'
import { Search } from './search'

function Home() {
	const [catalog, setCatalog] = useState([])
	const [filteredCatalog, setFilteredCatalog] = useState([])

	const handleSearch = str => {
		setFilteredCatalog(
			catalog.filter(item =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		)
	}

	useEffect(() => {
		getAllCategories().then(data => {
			setCatalog(data.categories)
			setFilteredCatalog(data.categories)
		})
	}, [])

	return (
		<div>
			{' '}
			{/* Обернуто в div */}
			<Search cb={handleSearch} />
			{filteredCatalog.length ? (
				<CategoryList catalog={filteredCatalog} />
			) : (
				<Preloader />
			)}
		</div>
	)
}

export { Home }
