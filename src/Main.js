import React from 'react'
import Header from './components/Header'
import Home from './components/Home'

const Main = ({ topic }) => {
	return (
		<div>
			<Header />
			<Home topic={topic} />
		</div>
	)
}

export default Main
