import React from 'react'
import Temperatura from './../img/termometro.jpg'
import './styles.css'

const Temperaturas = () => {
	return (
		<div className="col-md-12 text-center" id="temperatura">
			<div className="row">
				<div className="col-md-4">
					<div className="" />
				</div>
				<div className="col-md-4">
					<div className="">
						<img id="light_state" src={Temperatura} alt="temperatura" />
					</div>
				</div>
				<div className="col-md-4">
					<div className="" />
				</div>
			</div>
			<div className="card-block">
				<h2 className="card-title text-center">5. Temperatura</h2>
			</div>
		</div>
	)
}

export default Temperaturas
