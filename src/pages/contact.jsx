import React from 'react'

function Contact() {
	return (
		<div className='container'>
			<h1>Contact Us</h1>
			<div className='row'>
				<div className='col-md-6'>
					<h2>Contact Information</h2>
					<p>Phone: 123-456-7890</p>
					<p>Email: info@restaurant.com</p>
				</div>
			</div>
			<h2>Opening Hours</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>Day</th>
						<th>Hours</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Monday</td>
						<td>8:00 AM - 10:00 PM</td>
					</tr>
					<tr>
						<td>Tuesday</td>
						<td>8:00 AM - 10:00 PM</td>
					</tr>
					<tr>
						<td>Wednesday</td>
						<td>8:00 AM - 10:00 PM</td>
					</tr>
					<tr>
						<td>Thursday</td>
						<td>8:00 AM - 10:00 PM</td>
					</tr>
					<tr>
						<td>Friday</td>
						<td>8:00 AM - 11:00 PM</td>
					</tr>
					<tr>
						<td>Saturday</td>
						<td>8:00 AM - 11:00 PM</td>
					</tr>
					<tr>
						<td>Sunday</td>
						<td>8:00 AM - 10:00 PM</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export { Contact }
