import { decorate, action, observable} from 'mobx'; 
import axios from 'axios';
import config from '../config/secret';

class ListStore {
   //CRUD STORE
 
   //DELETE
    deleteById = id =>{
      axios.delete(config.url+"/api/processor/"+id
      )
      .then(res => { 
      console.log(res);
      console.log('Eliminado exitosamente')
      })
      .catch(err => {
      console.log(err);
      });
   }

   //PUT
   UpdateById = data =>{
        axios.put(config.url+"/api/processor/"+ data.id,{
          nombre: data.nombre, 
          nucleos: data.nucleos, 
          hilos: data.hilos, 
          tdp: data.tdp
      }) 
      .then(res => {
      console.log(res);
      console.log('Actualizado Correctamente')
      })
      .catch(err => {
      console.log(err+" error de actualización");
      }); 
   }
   
  
   //POST
   createItem = references =>{
      if(references === "") return;
        axios.post(config.url+"/api/processor", {
          nombre: references.nombre,
          nucleos: references.nucleos,
          hilos: references.hilos,
          tdp: references.tdp,
          image: references.image
        })
        .then(res => {
        console.log(res);
        })
        .catch(err => {
        console.log(err);
        })
    }
  
  
}

 
decorate(ListStore,{
  datos:observable,
  deleteById:action,
  UpdateById:action,
  createItem:action,
})

const listStore = new ListStore();

export default listStore;
