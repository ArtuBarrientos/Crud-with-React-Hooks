import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import config from './config/secret';
import AddForm from './forms/AddForm';
//import EditForm from './forms/EditForm';
import ProcessorsTable from './tables/ProcessorsTable';


function DataBase(){

	//const initialFormState = { id: null, nombre: '', nucleos: '', hilos: '', tdp:'' }
	// Setting state
	const [ processor, setProcessor ] = useState([])
	//const [ currentList, setCurrentList ] = useState(initialFormState)
	//const [ editing, setEditing ] = useState(false)
	const [references, setReferences ] = useState('');





//CRUD operations


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


	/*const addUser = user => {
		user.id = processor.length + 1
		setProcessor([ ...processor, user ])
	}*/

	
   //Crear
		useEffect(()=> {
			if(references === "") return;
			const Create = () => {
			axios.post(config.url+"/api/processor", {
				nombre: references.nombre,
				nucleos: references.nucleos,
				hilos: references.hilos,
				tdp: references.tdp
			})
			.then(res => {
			console.log(res);
			})
			.catch(err => {
			console.log(err);
			})

		}
		Create()
			
		}, [references])
	  
	  const datosAdd = ref =>{
		if(ref.nombre === "" || ref.nucleos === "" || ref.hilos === "" || ref.tdp === ""){
			alert('Toda la información necesita ser llenada');
			return '';
		} 
	
		  setReferences(ref)
		  setProcessor([...processor, ref])
		}
	  

	/*const deleteUser = id => {
		setEditing(false)
		setProcessor(processor.filter(user => user.id !== id))
	}*/


	//Eliminar
	  const deleteId = id =>{
			axios.delete(config.url+"/api/processor/"+id
			)
			.then(res => { 
			console.log("Eliminado exitosamente");
			})
			.catch(err => {
			console.log(err);
			});
		setProcessor(processor.filter(user => user.id !== id))
		//setEditing(false)	
	}
	 
	//Actualizar
	/*const updateList = (id, updated) => {
		axios.put(config.url+"/api/processor/"+ id,{
			  nombre: updated.nombre, 
			  nucleos: updated.nucleos, 
			  hilos: updated.hilos, 
			  tdp: updated.tdp
	  }) 
	  .then(res => {
		console.log(res+" actualizado correctamente");
	  })
	  .catch(err => {
		console.log(err+" error de actualización");
	  }); 
	    setEditing(false)
		setProcessor(processor.map(processor => (processor.id === id ? updated : processor)))
      }*/

	/*const editRow = processor => {
		setEditing(true)
		setCurrentList({ id: processor.id, 
						 nombre: processor.nombre, 
						 nucleos: processor.nucleos, 
						 hilos: processor.hilos, 
						 tdp: processor.tdp})
	}*/


 
	return (
		<div className="container">
			<div >
			    <div>
					<h2>Lista de Procesadores</h2>
					<ProcessorsTable processor={processor} deleteUser={deleteId} />
				</div>
				<div className="flex-large">
							<AddForm addUser={datosAdd} />
				</div>
			</div>
		</div>
	)
}

export default DataBase