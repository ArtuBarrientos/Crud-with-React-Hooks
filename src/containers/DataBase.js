import React, { useState, useEffect,} from 'react'
import axios from 'axios';
import config from '../config/secret';
import AddForm from '../forms/AddForm';
//import EditForm from './forms/EditForm';
import ProcessorsTable from '../tables/ProcessorsTable';
import { inject, observer } from 'mobx-react'
import swal from 'sweetalert';



function DataBase({ListStore}){
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

	  const datosAdd =(references) =>{
		  setReferences(references)
		  setProcessor([...processor, references])
		  swal({
			title: "Creado Exitosamente!",
			text: "",
			icon: "success",
			button: "Vale",
		  });
		}
	    


	//Eliminar
	  const deleteItemById = id =>{
		swal({
			title: "Esta seguro de Eliminar esto?",
			text: "No podra revertir el proceso una vez eliminado!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		  })
		  .then((willDelete) => {
			if (willDelete) {
			  ListStore.deleteById(id)
			  setProcessor(processor.filter(user => user.id !== id))
			  swal("Eliminado Exitosamente!", {
				icon: "success",
			  });
			} else {
			  swal("Cancelado Exitosamente!");
			}
		  });
       
		
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
