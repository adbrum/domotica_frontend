import React from 'react'
import lampadaOff from './../img/lampada-off.jpg'
import store01 from './../img/estore_01.jpg'
import './styles.css'
import { Link } from 'react-router-dom'

const Iluminacao = ({ mqtt }) => {
	return (
		<div className="col-md-12" id="iluminacao">
			<div className="row">
				<div className="col-md-4">
					<div>
						<img id="lampadaOff" src={lampadaOff} alt="iluninacao" />
						<p className="App-intro">
							<Link to="/iluminacao" mqtt={mqtt}>
								Ir para a página sobre \o/
							</Link>
							To get started, edit <code>src/App.js</code> and save to reload.
						</p>
					</div>
				</div>
				<div className="col-md-2">
					<div className="" />
				</div>
				<div className="col-md-4">
					<div>
						<img id="store01" src={store01} alt="iluninacao" />
					</div>
				</div>
			</div>
			<div className="card-block">
				<h2 className="card-title  text-center">1. Iluminação</h2>
			</div>
		</div>
	)
}

export default Iluminacao
