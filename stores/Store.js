import { EventEmitter } from "events";

import dispatcher from "../dispatcher";



class Store extends EventEmitter {
     constructor() {
         super();
         this.data="jeevika";
     }
     handleActions(action) {
        switch(action.type) {
          case "LOAD": {
            this.data = action.data;
            this.emit("change");
            break;
          }
        }
      }
    getAll(){
      return  this.data; 
        
    }
}



const store = new Store;
dispatcher.register(store.handleActions.bind(store));

export default store;