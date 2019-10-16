import React, { useState, useEffect,} from 'react'
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
		if(ref.nombre === "" || ref.nucleos === "" || ref.hilos === "" || ref.tdp === "" ){
			alert("Here's the title!", "...and here's the text!")
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
	  const deleteItemById = id =>{
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

export default DataBase