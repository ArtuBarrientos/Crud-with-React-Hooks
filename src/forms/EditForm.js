import React, { useState, useEffect } from 'react'

function EditForm(props){
  
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

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <form
                      
                    >
                      
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={processor.nombre} onChange={handleInputChange} />
                        <label>Nucleos</label>
                        <input type="text" name="nucleos" value={processor.nucleos} onChange={handleInputChange} />
                        <label>Hilos</label>
                        <input type="text" name="hilos" value={processor.hilos} onChange={handleInputChange} />
                        <label>Tdp</label>
                        <input type="text" name="tdp" value={processor.tdp} onChange={handleInputChange} />
                       
  
                    </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button onClick={event => {
                        event.preventDefault()
                        props.updateList(processor.id, processor)
                      }}type="button" class="btn btn-primary" data-dismiss="modal">Actualizar</button>
                </div>
            </div>
        </div>
     </div>


    



  )
}

export default EditForm
