import React from 'react'
import avisoMedico from './../img/aviso_medic.png'
import './styles.css'

const Alarmes = () => {
	return (
		<div className="col-md-12" id="video">
			<div className="row">
				<div className="col-md-4">
					<div className="" />
				</div>
				<div className="col-md-4">
					<div>
						<img id="light_state" src={avisoMedico} alt="alarme" />
					</div>
				</div>
				<div className="col-md-4">
					<div className="" />
				</div>
			</div>
			<div className="card-block">
				<h2 className="card-title text-center">4. Alarmes</h2>
			</div>
		</div>
	)
}

export default Alarmes
