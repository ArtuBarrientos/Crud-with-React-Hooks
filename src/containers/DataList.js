import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config/secret';
import EditForm from '../forms/EditForm';
import { inject, observer } from 'mobx-react'


function DataList({match,ListStore}){

    const datosId =  match.params.id
    const [datos, setDatos]= useState([])
    const [ editing, setEditing ] = useState(false)
    const initialFormState = { id: null, image:null ,nombre: '', nucleos: '', hilos: '', tdp:'' }
    const [ currentList, setCurrentList ] = useState(initialFormState)

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
        ListStore.deleteById(datosId);
        setDatos(datosId)

    }
     

    const updateList = (id, datosId) => {
      ListStore.UpdateById(datosId);
      setDatos(datos => (datos.id === id ? datosId : datos))
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
                              <button
                                    onClick={()=>deleteId(datos.id)}
                                    className="button muted-button"
                                  >
                                    Eliminar
                                  </button>
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
    
 export default inject("ListStore") (observer(DataList));

