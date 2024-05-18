import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<nav style={{ backgroundColor: 'rgb(209, 5, 209)' }}>
			<div className='container'>
				<div className='nav-wrapper'>
					<div className='center-align'>
						<Link to='/' className='brand-logo center'>
							SPA project
						</Link>
						<ul id='nav-mobile' className='right hide-on-med-and-down'>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export { Header }
