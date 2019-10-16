import React from 'react'
import AddForm from '../forms/AddForm';
import ProcessorsTable from '../tables/ProcessorsTable';


function Page(props){

	return (
		<div className="container">
			<div >
			    <div>
					<h2>Lista de Procesadores</h2>
					<ProcessorsTable processor={props.processor} deleteItemById={props.deleteItemById}/>
				</div>
			
			</div>
		</div>
	)
}

export default Page