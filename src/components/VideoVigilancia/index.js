import React from 'react'
import videoVigilancia from './../img/videovigilancia.jpg'
import './styles.css'

const VideoVigilancia = () => {
	return (
		<div className="col-md-12 text-center" id="video">
			<div className="row">
				<div className="col-md-3">
					<div className="" />
				</div>
				<div className="col-md-3">
					<div>
						<img id="light_state" src={videoVigilancia} alt="vigilancia" />
					</div>
				</div>
				<div className="col-md-6">
					<div className="" />
				</div>
			</div>
			<div className="card-block">
				<h2 className="card-title  text-center">3. Vídeo Vigilância</h2>
			</div>
		</div>
	)
}

export default VideoVigilancia
