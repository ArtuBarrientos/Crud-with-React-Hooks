import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, nombre: '', nucleos: '', hilos: '', tdp: '' }
	const [ processor, setProcessor ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProcessor({ ...processor, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!processor.nombre || !processor.nucleos || !processor.hilos || !processor.tdp) return
				props.addUser(processor)
				setProcessor(initialFormState)
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
			<button>Añadir Nuevo</button>
		</form>
	)
}

export default AddUserForm
