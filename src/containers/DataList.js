import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config/secret';
import EditForm from '../forms/EditForm';
import {Link} from 'react-router-dom';

function DataList({match}){
  //render(){
    //const { match } = this.props;
    const datosId =  match.params.id
    const [datos, setDatos]= useState([])
    const initialFormState = { id: null, image:null ,nombre: '', nucleos: '', hilos: '', tdp:'' }
	// Setting state

	const [ currentList, setCurrentList ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

    useEffect(() => {
        axios.get(config.url+"/api/processor/"+datosId)
        .then(res => res.data)
			  .then((data) => {
        setDatos( data )
		  })
        .catch((err) => {
          console.log(err);
        })
    } ,
       [datosId]);


       const deleteId = datosId =>{
        axios.delete(config.url+"/api/processor/"+datosId
        )
        .then(res => { 
        console.log(res);
        console.log('Eliminado exitosamente')
        })
        .catch(err => {
        console.log(err);
        });
        setDatos(datosId)

    }
     

    const updateList = (id, updated) => {
      axios.put(config.url+"/api/processor/"+ id,{
          nombre: updated.nombre, 
          nucleos: updated.nucleos, 
          hilos: updated.hilos, 
          tdp: updated.tdp
      }) 
      .then(res => {
      console.log(res);
      console.log('Actualizado Correctamente')
      })
      .catch(err => {
      console.log(err+" error de actualización");
      }); 
     
      setDatos(datos => (datos.id === id ? updated : datos))
        }

        const editRow = datos => {
          setCurrentList({ id: datos.id, 
                   image: datos.image,
                   nombre: datos.nombre, 
                   nucleos: datos.nucleos, 
                   hilos: datos.hilos, 
                   tdp: datos.tdp})
        }

    
    return(
      <div className="container" style={{marginTop:"1rem"}}>
          <div  className="d-flex justify-content-center">
                <div className="card" style={{width: "20rem"}}>
                    <img src={datos.image} className="card-img-top" alt=""/>
                    <div className="card-body">
                      <h2 className="card-title">{datos.nombre}</h2>
                      <h4 className="card-text">Datos</h4>
                    </div>
                    <ul className="list-group list-group-flush" >
                      <li className="list-group-item">Nucleos: {datos.nucleos}</li>
                      <li className="list-group-item">Hilos: {datos.hilos}</li>
                      <li className="list-group-item">Tdp: {datos.tdp}</li>
                    </ul>
                    <div className="row card-body">
                        <div className="col">
                            <button 
                                onClick={() => {
                                  editRow(datos)
                                }}
                                className="button muted-button"
                                data-toggle="modal" data-target="#exampleModal"
                              >
                                Editar
                              </button>
                          </div>
                          <div className="col">
                              <Link to='/'>
                                <button
                                    onClick={()=>deleteId(datos.id)}
                                    className="button muted-button"
                                  >
                                    Eliminar
                                  </button>
                              </Link>
                          </div>  
                     </div>
                  </div>
                  <EditForm
                    editing={editing}
                    setEditing={setEditing}
                    currentList={currentList}
                    updateList={updateList}
                  />
          </div>
      </div>
             )
         }
 // }
    
export default DataList;

