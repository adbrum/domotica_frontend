import React from 'react'

import Iluminacao from '../Iluminacao'
import Portas from '../Portas'
import VideoVigilancia from '../VideoVigilancia'
import Alarmes from '../Alarmes'
import Temperaturas from '../Temperaturas'
import Configuracoes from '../Configuracoes/index'

import './styles.css'

const Home = (props) => {
	return (
		<div className="container-fluid">
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-4">
						<Iluminacao />
					</div>
					<div className="col-md-4">
						<Portas />
					</div>
					<div className="col-md-4">
						<VideoVigilancia />
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-4">
						<Alarmes />
					</div>
					<div className="col-md-4">
						<Temperaturas />
					</div>
					<div className="col-md-4">
						<Configuracoes />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
