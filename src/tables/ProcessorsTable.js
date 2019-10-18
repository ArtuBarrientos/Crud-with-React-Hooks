import React from 'react'
import {Link} from 'react-router-dom'


function ProcessorsTable (props){
      return(
        <div className="container row d-flex justify-content-center">
            {props.processor.length > 0 ? (
              props.processor.map(item => (
                <div style={{marginTop:"0.5rem", marginBottom:"0.5rem"}}>
                    <div className="col">
                      <div className="card border-primary mb-3" style={{width: "15rem"}}>
                          <div className="card-body">
                            <h5 className="card-title text-primary">{item.nombre}</h5>
                          </div>
                          <img src={item.image} height="240" className="card-img-top" alt="" style={{borderRadius:"2em"}}/>
                          <div className="card-body text-primary">
                              <div className="d-flex justify-content-between">
                                  <Link to={`/Datos/${item.id}`}>
                                    <h6  style={{textDecoration:"underline"}}>
                                    Ver Más...
                                    </h6>
                                  </Link>
                                    <h6
                                        style={{cursor:"pointer", textDecoration:"underline"}}
                                        onClick={() => props.deleteItemById(item.id)}
                                      >
                                        Eliminar
                                    </h6>
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
      }

export default ProcessorsTable
