import React,{ Component } from 'react'
import DataBase from './containers/DataBase'
import {
    BrowserRouter as ReactRouter,
    Route
  } from 'react-router-dom';
import DataList from './containers/DataList';
import NavBar from './components/NavBar';
import { Provider } from 'mobx-react';
import ListStore from './store/ListStore';



class App extends Component{
   render(){
		return (
          <Provider ListStore={ListStore}>
               <ReactRouter>
						<NavBar/>
						<Route exact path="/" component={DataBase}></Route>
						<Route 
							exact path="/Datos/:id" 
							component={DataList}
						>
						</Route>
				</ReactRouter>

		  </Provider>
				

			)
		}

}

export default App

