import React from 'react'
import './styles.css'

const Header = () => {
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="jumbotron">
					<h1 className="text-left">
						<i className="fa fa-home" id="home">
							{' '}
							Domótica 2020
						</i>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default Header
