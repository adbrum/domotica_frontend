import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar
import Lighting from './components/Iluminacao/Lighting'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={App} />
			<Route path="/iluminacao" component={Lighting} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
)

serviceWorker.unregister()
