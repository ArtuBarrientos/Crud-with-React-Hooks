import React from 'react';

function DataList({match}){
  //render(){
    //const { match } = this.props;
    
    return(
         <div className={'container'}>
           <h1>Datos</h1>
           <p>ID:{match.params.id}</p>
         </div>   
             )
         }
 // }
    
export default DataList;