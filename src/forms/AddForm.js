import React, { useState } from 'react'


function AddForm(props) {
	const initialFormState = { id: null, nombre: '', nucleos: '', hilos: '', tdp: '' }
	const [ processor, setProcessor ] = useState(initialFormState)
    
	const handleInputChange = event => {
		const { name, value } = event.target

		setProcessor({ ...processor, [name]: value })
	}

	return (
	<div className="d-flex justify-content-center">
		<button  data-toggle="modal" data-target="#AddForm">Añadir Nuevo</button>
		<div class="modal fade" id="AddForm" tabindex="-1" role="dialog" aria-labelledby="AddFormLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
						<h5 class="modal-title" id="AddFormLabel">Editar</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						</div>
						<div class="modal-body">
								<form>
			
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
									if (!processor.nombre || !processor.nucleos || !processor.hilos || !processor.tdp) return
									props.datosAdd(processor)
									setProcessor(initialFormState)
			                 }}type="button" class="btn btn-primary" data-dismiss="modal">Añadir</button>
							</div>
						</div>
					</div>
		</div>
	</div>
	)
}

export default AddForm
