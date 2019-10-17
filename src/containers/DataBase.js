import React, { useState, useEffect,} from 'react'
import axios from 'axios';
import config from '../config/secret';
import AddForm from '../forms/AddForm';
//import EditForm from './forms/EditForm';
import ProcessorsTable from '../tables/ProcessorsTable';
import { inject, observer } from 'mobx-react'


function DataBase({ListStore}){

	// Setting state
	const [ processor, setProcessor ] = useState([])
	const [references, setReferences ] = useState('');

//Traer Lista
	useEffect(() => {
		const List = () =>{
			axios.get(config.url+"/api/processor")
			.then(res => res.data)
			.then((data) => {
				setProcessor( data )
		  }).catch((err) => {
			// handle error
			console.log(err+' pero que a pasao WTF????');
		  })
		}
		List();
	} ,
	   []);

	
   //Crear
		useEffect(()=> {
		  ListStore.createItem(references);
		}, [ListStore,references])

	  const datosAdd = ref =>{
		if(ref.nombre === "" || ref.nucleos === "" || ref.hilos === "" || ref.tdp === "" ){
			alert("llena los campos prro")
			return '';
		} 
		  setReferences(ref)
		  setProcessor([...processor, ref])
		}
	  


	//Eliminar
	  const deleteItemById = id =>{
        ListStore.deleteById(id)
		setProcessor(processor.filter(user => user.id !== id))
	}
	return (
		<div className="container">
			<div >
			    <div>
					<h2>Lista de Procesadores</h2>
					<AddForm datosAdd={datosAdd} />
					
				</div>
				<div>
					<ProcessorsTable processor={processor} deleteItemById={deleteItemById} />
				</div>
			</div>
		</div>
	)
}

export default inject("ListStore") (observer(DataBase));
