import React from 'react'
import {Link} from 'react-router-dom'


const ProcessorsTable = props => (
  <div className="container row d-flex justify-content-center">
      {props.processor.length > 0 ? (
        props.processor.map(item => (
          <div style={{marginTop:"0.5rem", marginBottom:"0.5rem"}}>
              <div className="col">
                <div className="card" style={{width: "15rem"}}>
                    <div className="card-body">
                       <h5 className="card-title">{item.nombre}</h5>
                    </div>
                    <img src={item.image} height="250" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <Link to={`/Datos/${item.id}`}>
                              <p>
                              Ver Más...
                              </p>
                            </Link>
                              <p
                                  style={{cursor:"pointer", color:"blue"}}
                                  onClick={() => props.deleteUser(item.id)}
                                 
                                >
                                  Eliminar
                              </p>
                        </div>
                    </div>
                 </div>
               </div>
          </div>
        ))
      ) : (
        <div>
          <h2 colSpan={3}>No Registros</h2>
        </div>
      )}
  </div>
  
)

export default ProcessorsTable
