import React from 'react'
import {Link} from 'react-router-dom'


const ProcessorsTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Nucleos</th>
        <th>Hilos</th>
        <th>Tdp</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {props.processor.length > 0 ? (
        props.processor.map(item => (
          <tr key={item.id}>
            
            <td><Link to={`/Datos/${item.id}`}>{item.nombre}</Link></td>
            <td>{item.nucleos}</td>
            <td>{item.hilos}</td>
            <td>{item.tdp}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(item)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteUser(item.id)}
                className="button muted-button"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ProcessorsTable
