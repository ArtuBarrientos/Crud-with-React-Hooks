import React,{useEffect, useState} from 'react';
import axios from 'axios';
import config from '../config/secret';

function DataList({match}){
  //render(){
    //const { match } = this.props;
    const datosId =  match.params.id
    const [datos, setDatos]= useState([])

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

    
    
    return(
      <div className="container d-flex justify-content-center" style={{marginTop:"5rem"}}>
         <div className="card" style={{width: "25rem"}}>
            <img src={datos.image} className="card-img-top" alt=""/>
            <div className="card-body">
              <h2 className="card-title">{datos.nombre}</h2>
              <h4 className="card-text">Datos</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Nucleos: {datos.nucleos}</li>
              <li className="list-group-item">Hilos: {datos.hilos}</li>
              <li className="list-group-item">Tdp: {datos.tdp}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Editar</a>
              <a href="#" className="card-link">Eliminar</a>
            </div>
          </div>
        </div>
             )
         }
 // }
    
export default DataList;