import React, {Component } from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';

class App extends Component{
	

	render(){
		return(
			<div>
				<BrowserRouter>
					<div>
					{/*
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/something" component={Something} />
					*/}
					</div>
				</BrowserRouter>
			</div>
			);
	}
}

export default App;