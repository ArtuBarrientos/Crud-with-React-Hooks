import React,{ Component } from 'react'
import DataBase from './DataBase'
import {
    BrowserRouter as ReactRouter,
    Route
  } from 'react-router-dom';
import DataList from './containers/DataList';
import NavBar from './components/NavBar';


class App extends Component{

   render(){
		return (
		<ReactRouter>
			    <NavBar/>
				<Route exact path="/" component={DataBase}></Route>
				<Route exact path="/Datos/:id" component={DataList}></Route>
				
		</ReactRouter>
			)
		}

}

export default App

