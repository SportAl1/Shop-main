import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom' // Импорт компонентов маршрутизации
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Home } from './pages/home'
import { Contact } from './pages/contact'
import { About } from './pages/about'
import { Category } from './pages/category'
import { Recipe } from './pages/recipe'

function NoMatch() {
	let location = useLocation() // Используем useLocation

	return (
		<div>
			<h1>Oops!</h1>
			<h3>Sorry, an unexpected error has occurred.</h3>
			<h5>Does not exist: {location.pathname}</h5>
		</div>
	)
}

function App() {
	return (
		<BrowserRouter basename='/Spa-main'>
			{' '}
			<Header />
			<main className='container content'>
				<Routes>
					{' '}
					{/* Используйте Routes внутри BrowserRouter */}
					<Route path='/' element={<Home />} />
					<Route path='contact' element={<Contact />} /> {/* Поправьте пути */}
					<Route path='about' element={<About />} /> {/* Поправьте пути */}
					<Route path='*' element={<NoMatch />} />{' '}
					<Route path='/category/:name' element={<Category />} />
					<Route path='/meal/:id' element={<Recipe />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	)
}

export default App
