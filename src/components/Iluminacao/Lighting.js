import React, { Component } from 'react'
import lampadaOn from './../img/lampada-on.jpg'
//import blind01 from './../img/estore_01.jpg'
import lampadaOff from './../img/lampada-off.jpg'
import blind02 from './../img/estore_02.jpg'
import axios from 'axios'
import './styles.css'

class Lighting extends Component {
	constructor(props) {
		super(props)
		this.state = {
			_state: 0,
			state_blind: 0,
			place: '',
			state_livingroom: 0,
			state_room: 0,
			state_kitchen: 0,
			livingroom: lampadaOff,
			room: lampadaOff,
			kitchen: lampadaOff,
			blind_livingroom: 0,
			blind_room: 0,
			blind_kitchen: 0,
			Outdoor: 0,
			Garage: 0,
			General: 0
		}
	}

	handleSubmit = async (event, place, state) => {
		event.preventDefault()
		//console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX: ', this.state._state)

		if (place === 'sala') {
			const state_livingroom = this.state.state_livingroom ? 0 : 1
			if (state_livingroom === 1) {
				this.setState({ livingroom: lampadaOn, state_livingroom })
			} else {
				this.setState({ livingroom: lampadaOff, state_livingroom })
			}
			this.setState({ _state: state_livingroom })
		}
		if (place === 'quarto') {
			const state_room = this.state.state_room ? 0 : 1
			if (state_room === 1) {
				this.setState({ room: lampadaOn, state_room })
			} else {
				this.setState({ room: lampadaOff, state_room })
			}
			this.setState({ _state: state_room })
		}
		if (place === 'cozinha') {
			const state_kitchen = this.state.state_kitchen ? 0 : 1
			if (state_kitchen === 1) {
				this.setState({ kitchen: lampadaOn, state_kitchen })
			} else {
				this.setState({ kitchen: lampadaOff, state_kitchen })
			}
			this.setState({ _state: state_kitchen })
		}

		//console.log('PLACE: ', place)
		//console.log('STATE: ', state)
		//console.log('STATE.STATE: ', this.state._state)

		axios({
			url: 'http://192.168.1.15:3000/',
			method: 'get',
			params: {
				state: this.state._state,
				place: place
			}
		})
			.then((res) => {
				console.log(res)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	handleSubmitBlind = async (event, place, state) => {
		event.preventDefault()
		//console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX: ', state)

		if (place === 'blind_livingroom') {
			if (state === 1) {
				this.setState({ blind_livingroom: 1 })
			} else {
				this.setState({ blind_livingroom: 0 })
			}
		}
		if (place === 'blind_room') {
			if (state === 1) {
				this.setState({ blind_room: 1 })
			} else {
				this.setState({ blind_room: 0 })
			}
		}
		if (place === 'blind_kitchen') {
			if (state === 1) {
				this.setState({ blind_kitchen: 1 })
			} else {
				this.setState({ blind_kitchen: 0 })
			}
		}
		this.setState({ state_blind: state })

		//console.log('PLACE_BLIND: ', place)
		//console.log('STATE_STATE: ', state)

		axios({
			url: 'http://192.168.1.15:3000/blind',
			method: 'get',
			params: {
				state_blind: state,
				place: place
			}
		})
			.then((res) => {
				console.log(res)
			})
			.catch((error) => {
				console.log(error)
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
										<img
											className="img"
											id="light_state"
											src={this.state.livingroom}
											alt="iluninacao"
										/>
									</div>
									<div>
										<button
											onClick={(e) => {
												this.handleSubmit(e, 'sala', 1)
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
									<div id="eblind_state">
										<img src={blind02} alt="blind02" styles="height: 220px" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmitBlind(e, 'blind_livingroom', 1)
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
													this.handleSubmitBlind(e, 'blind_livingroom', 0)
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
										<img
											className="img"
											id="light_state_01"
											src={this.state.room}
											alt="iluninacao"
										/>
									</div>
									<div>
										<button
											onClick={(e) => {
												this.handleSubmit(e, 'quarto', 1)
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
									<div id="eblind_state_01">
										<img src={blind02} alt="blind02" styles="height: 220px" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmitBlind(e, 'blind_room', 1)
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
													this.handleSubmitBlind(e, 'blind_room', 0)
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
										<img
											className="img"
											id="light_state_02"
											src={this.state.kitchen}
											alt="iluninacao"
										/>
									</div>
									<div>
										<button
											onClick={(e) => {
												this.handleSubmit(e, 'cozinha', 1)
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
									<div id="eblind_state_02">
										<img src={blind02} alt="blind02" styles="height: 220px" />
									</div>
									<div className="row">
										<div className="col-md-6">
											<button
												onClick={(e) => {
													this.handleSubmitBlind(e, 'blind_kitchen', 1)
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
													this.handleSubmitBlind(e, 'blind_kitchen', 0)
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
