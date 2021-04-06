import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  active = ['one', 'two', 'three'];
  inactive = ['four', 'five', 'six'];
  constructor() { }



  setToInactive(index:number){
    this.inactive.unshift(this.active[index]);
    this.active.splice(index, 1);
  }

  setToActive(index:number){
    this.active.unshift(this.inactive[index]);
    this.inactive.splice(index, 1);
  }

  deleteItem(element: string){
    if(this.active.includes(element)){
      this.active.splice(this.active.indexOf(element), 1);
    }else{
      this.inactive.splice(this.inactive.indexOf(element), 1);
    }
  }

  insertNew(newElement: string){
    this.active.unshift(newElement);
  }

  clear(){
    this.inactive.length = 0;
  }
}
