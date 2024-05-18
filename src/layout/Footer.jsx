import React from 'react'

function Footer() {
	return (
		<footer
			style={{
				backgroundColor: 'rgb(209, 5, 209)',
				padding: '15px 0',
				textAlign: 'center',
			}}
			className='page-footer'
		>
			<div className='footer-content'>
				<div
					className='container'
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<div>© {new Date().getFullYear()} Алина Коваль ТКБО-01-22</div>
					<a
						href='https://github.com/SoldatovaNastya/SPA_PROJECT'
						style={{
							textDecoration: 'none',
							color: 'inherit',
							marginTop: '2px',
						}}
						className='grey-text text-lighten-4'
					>
						Repository
					</a>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
