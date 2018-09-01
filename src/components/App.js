import React, {Component } from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'antd';

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
					<Button type="primary">Button</Button>
					</div>
				</BrowserRouter>
			</div>
			);
	}
}

export default App;