import React, { useState, useEffect } from 'react'

function ModalEditForm(props){
  const [ processor, setProcessor ] = useState(props.currentList)

  useEffect(
    () => {
      setProcessor(props.currentList)
    },
    [ props ]
  )
//You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setProcessor({ ...processor, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateList(processor.id, processor)
      }}
    >
      <label>Nombre</label>
      <input type="text" name="nombre" value={processor.nombre} onChange={handleInputChange} />
      <label>Nucleos</label>
      <input type="text" name="nucleos" value={processor.nucleos} onChange={handleInputChange} />
      <label>Hilos</label>
      <input type="text" name="hilos" value={processor.hilos} onChange={handleInputChange} />
      <label>Tdp</label>
      <input type="text" name="tdp" value={processor.tdp} onChange={handleInputChange} />
      <button>Actualizar</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancelar
      </button>
    </form>
  )
}

export default ModalEditForm
