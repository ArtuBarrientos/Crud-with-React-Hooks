import React, { useState, useEffect, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import axios from 'axios';
import config from './config/secret';


const App = () => {

	const initialFormState = { id: null, nombre: '', nucleos: '', hilos: '', tdp:'' }
	// Setting state
	const [ processor, setProcessor ] = useState([])
	const [ currentList, setCurrentList ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
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
	  const datosAdd = ref =>{
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
		setEditing(false)	
	}
	 
	//Actualizar
	const updateList = (id, updatedList) => {
		axios.put(config.url+"/api/processor/"+ id,{
			  nombre: updatedList.nombre, 
			  nucleos: updatedList.nucleos, 
			  hilos: updatedList.hilos, 
			  tdp: updatedList.tdp
	  }) 
	  .then(res => {
		console.log(res+" actualizado correctamente");
	  })
	  .catch(err => {
		console.log(err+" error de actualización");
	  }); 
	    setEditing(false)
		setProcessor(processor.map(processor => (processor.id === id ? updatedList : processor)))
      }

	const editRow = processor => {
		setEditing(true)
		setCurrentList({ id: processor.id, 
						 nombre: processor.nombre, 
						 nucleos: processor.nucleos, 
						 hilos: processor.hilos, 
						 tdp: processor.tdp})
	}


	return (
		<div className="container">
			<h1>CRUD App con Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Editar</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentList={currentList}
								updateList={updateList}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Insertar Datos</h2>
							<AddUserForm addUser={datosAdd} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Lista de Procesadores</h2>
					<UserTable processor={processor} editRow={editRow} deleteUser={deleteId} />
				</div>
			</div>
		</div>
	)
}

export default App