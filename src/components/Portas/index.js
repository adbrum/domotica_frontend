import React from 'react'
import portaEntrata from './../img/porta-entrada.jpg'
import './styles.css'

const Portas = () => {
	return (
		<div className="col-md-12 text-center" id="portas">
			<div className="row">
				<div className="col-md-5">
					<div className="" />
				</div>
				<div className="col-md-2">
					<div className="">
						<img id="light_state" src={portaEntrata} alt="portas" />
					</div>
				</div>
				<div className="col-md-6">
					<div className="" />
				</div>
			</div>
			<div className="card-block">
				<h2 className="card-title text-center">2. Portas</h2>
			</div>
		</div>
	)
}

export default Portas
