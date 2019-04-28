import React from 'react'
import Engrenagem from './../img/engrenagem.png'
import './styles.css'

const Configuracoes = () => {
	return (
		<div className="col-md-12 text-center" id="configuracao">
			<div className="row">
				<div className="col-md-3">
					<div className="" />
				</div>
				<div className="col-md-6">
					<div className="">
						<img id="light_state" src={Engrenagem} alt="configuracao" />
					</div>
				</div>
			</div>
			<div className="card-block">
				<h2 className="card-title text-center">6. Configurações</h2>
			</div>
		</div>
	)
}

export default Configuracoes
