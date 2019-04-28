import React, { Component } from 'react'
import lampadaOff from './../img/lampada-off.jpg'
import store02 from './../img/estore_02.jpg'
import axios from 'axios'
import './styles.css'

class Lighting extends Component {
	constructor(props) {
		super(props)
		this.state = {
			state: '',
			place: '',
			livingroom: false,
			room: false,
			kitchen: false,
			Outdoor: false,
			Garage: false,
			General: false
		}
	}

	componentDidMount = () => {
		console.log(this.state.place)
	}

	handleSubmit = async (event, place) => {
		event.preventDefault()
		console.log('PLACE: ', place)
		this.setState({
			state: 'true',
			place: place
		})
		await axios
			.get('http://192.168.1.14:8000/cliente/?state=' + this.state.state + '&place=' + place)
			.then((res) => {
				//console.log(res)
				//console.log(res.data)
			})
	}

	render() {
		return (
			<div>
				<div className="container-fluid" id="form_id">
					<div className="row">
						<div className="col-md-12">
							<div className="jumbotron text-right row">
								<div className="col-md-6 text-left">
									<h1>
										<i className="fa fa-home" id="home">
											{' '}
											Principal
										</i>
									</h1>
								</div>
								<div className="col-md-6 text-right">
									<h1>
										<i className="fa fa-lightbulb"> 1 - Iluminação</i>
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 card" id="sala">
							<div className="card-block">
								<h2 className="card-title  text-center">Sala</h2>
							</div>
							<div className="row">
								<div className="col-md-4" align="center">
									<div>
										<img className="img" id="light_state" src={lampadaOff} alt="iluninacao" />
									</div>
									<div>
										<button
											onClick={(e) => {
												this.handleSubmit(e, 'sala')
											}}
											type="button"
											id="btn_on"
											className="btn btn-warning btn-block">
											{' '}
											1. Ligar/Desligar
										</button>
									</div>
								</div>
								<div className="col-md-6" align="center">
									<div id="estore_state">
										<img src={store02} alt="store02" styles="height: 220px" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmit(e, 'sala_store')
												}}
												type="button"
												id="opacity"
												className="btn btn-success btn-block">
												2. Abrir
											</button>
										</div>
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmit(e, 'sala_store')
												}}
												type="button"
												id="opacity2"
												className="btn btn-danger btn-block">
												3. Fechar
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 card" id="quarto_01">
							<div className="card-block">
								<h2 className="card-title  text-center">Quarto</h2>
							</div>
							<div className="row">
								<div className="col-md-4" align="center">
									<div>
										<img className="img" id="light_state_01" src={lampadaOff} alt="iluninacao" />
									</div>
									<div>
										<button
											onClick={(e) => {
												this.handleSubmit(e, 'quarto')
											}}
											type="button"
											id="btn_on_01"
											className="btn btn-warning btn-block">
											{' '}
											4. Ligar/Desligar
										</button>
									</div>
								</div>
								<div className="col-md-6" align="center">
									<div id="estore_state_01">
										<img src={store02} alt="store02" styles="height: 220px" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmit(e, 'quarto_store')
												}}
												type="button"
												id="opacity3"
												className="btn btn-success btn-block">
												5. Abrir
											</button>
										</div>
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmit(e, 'quarto_store')
												}}
												type="button"
												id="opacity4"
												className="btn btn-danger btn-block">
												6. Fechar
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 card" id="quarto_02">
							<div className="card-block">
								<h2 className="card-title  text-center">Cozinha</h2>
							</div>
							<div className="row">
								<div className="col-md-4" align="center">
									<div>
										<img className="img" id="light_state_02" src={lampadaOff} alt="iluninacao" />
									</div>
									<div>
										<button
											onClick={(e) => {
												this.handleSubmit(e, 'cozinha')
											}}
											type="button"
											id="btn_on_02"
											className="btn btn-warning btn-block">
											{' '}
											7. Ligar/Desligar
										</button>
									</div>
								</div>
								<div className="col-md-6" align="center">
									<div id="estore_state_02">
										<img src={store02} alt="store02" styles="height: 220px" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmit(e, 'cozinha_store')
												}}
												type="button"
												id="opacity5"
												className="btn btn-success btn-block">
												8. Abrir
											</button>
										</div>
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmit(e, 'cozinha_store')
												}}
												type="button"
												id="opacity6"
												className="btn btn-danger btn-block">
												9. Fechar
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-4 card" id="exterior">
							<div className="card-block">
								<h2 className="card-title  text-center">Exterior</h2>
							</div>
							<div className="row">
								<div className="col-md-3" styles="height: 370px;">
									<div />
								</div>
								<div className="col-md-3">
									<div>
										<img className="img" id="light_state_03" src={lampadaOff} alt="iluninacao" />
									</div>
								</div>
								<div className="col-md-3">
									<br />
									<br />
									<div>
										<button
											type="button"
											id="btn_on_03"
											className="btn btn-success btn-lg btn-block">
											Ligar
										</button>
									</div>
									<br />
									<div>
										<button
											type="button"
											id="btn_off_03"
											className="btn btn-danger btn-lg btn-block">
											Desligar
										</button>
									</div>
								</div>
								<div className="col-md-3" styles="height: 370px;">
									<div />
								</div>
							</div>
						</div>
						<div className="col-md-4 card" id="garagem">
							<div className="card-block">
								<h2 className="card-title  text-center">Garagem</h2>
							</div>
							<div className="row">
								<div className="col-md-3" styles="height: 370px;">
									<div />
								</div>
								<div className="col-md-3">
									<div>
										<img className="img" id="light_state_01" src={lampadaOff} alt="iluninacao" />
									</div>
								</div>
								<div className="col-md-3">
									<br />
									<br />
									<div>
										<button
											type="button"
											id="btn_on_04"
											className="btn btn-success btn-lg btn-block">
											Ligar
										</button>
									</div>
									<br />
									<div>
										<button
											type="button"
											id="btn_off_04"
											className="btn btn-danger btn-lg btn-block">
											Desligar
										</button>
									</div>
								</div>
								<div className="col-md-3" styles="height: 370px;">
									<div />
								</div>
							</div>
						</div>
						<div className="col-md-4 card" id="garagem">
							<div className="card-block">
								<h2 className="card-title  text-center">Geral</h2>
							</div>
							<div className="row">
								<div className="col-md-2" styles="height: 370px;">
									<div />
								</div>
								<div className="col-md-8">
									<div>
										<button
											type="button"
											id="btn_on_05"
											className="btn btn-success btn-lg btn-block">
											Ligar Tudo
										</button>
									</div>
									<br />
									<div>
										<button
											type="button"
											id="btn_off_05"
											className="btn btn-danger btn-lg btn-block">
											Desligar Tudo
										</button>
									</div>
									<br />
									<div>
										<button
											type="button"
											id="btn_back"
											className="btn btn-primary btn-lg btn-block">
											0. Voltar Principal
										</button>
									</div>
								</div>
								<div className="col-md-2" styles="height: 370px;">
									<div />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Lighting
