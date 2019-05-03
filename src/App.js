import React, { Component } from 'react';
import MapContainer from './Components/Map';
import AppHeader from './Components/AppHeader';
import ProductPurchase from './Components/ProductPurchase';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Stores/store';

class App extends Component 
{
	render( )
	{
		return (
			<div className="App">
				<Provider store={store}>
				<HashRouter>
					<div>
						<AppHeader />
						<Route path="/purchase" render={()=><ProductPurchase />}/>
						<Route path="/map" render={()=><MapContainer />}/>
					</div>
				</HashRouter>
				</Provider>
			</div>
		);
	}
}

export default App;