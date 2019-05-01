import React, { Component } from 'react'
import lampadaOff from './../img/lampada-off.jpg'
import store01 from './../img/estore_01.jpg'
import './styles.css'
import { Redirect } from 'react-router'
class Iluminacao extends Component {
	state = {
		redirect: false
	}

	handleRedirect = () => {
		this.setState({ redirect: true })
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/iluminacao" />
		}
		return (
			<div className="col-md-12" id="iluminacao">
				<div className="row" onClick={() => this.handleRedirect()}>
					<div className="col-md-4">
						<div>
							<img id="lampadaOff" src={lampadaOff} alt="iluninacao" />
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
}

export default Iluminacao
