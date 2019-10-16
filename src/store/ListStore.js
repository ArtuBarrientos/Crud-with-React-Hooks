import { decorate,action, reaction, observable} from 'mobx'; 
import axios from 'axios';
import config from '../config/secret';

class ListStore {
   
   processor = []
    
   

}

 
decorate(ListStore,{
  processor:observable

})

const listStore = new ListStore();


export default listStore;
