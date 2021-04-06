import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  activeItems:string [] = [];
  inactiveItems: string [] = [];
  newValue: string = '';

  showActive: boolean = true;
  showInactive: boolean = true;

  isLightActive: boolean = true;


  constructor(private todo: TodoService){
  }

  ngOnInit(){
    this.activeItems = this.todo.active;
    this.inactiveItems = this.todo.inactive;

  }

  changeTheme(event:any){
    this.isLightActive = !this.isLightActive;
    if(this.isLightActive){
      event.target.src = '../assets/images/icon-moon.svg';
      document.getElementsByTagName('body')[0].style.backgroundColor ='#fafafa';
    }else{
      event.target.src = '../assets/images/icon-sun.svg';
      document.getElementsByTagName('body')[0].style.backgroundColor ='hsl(235, 21%, 11%)';
    }
    console.log(event.target);
  }

  onKeypress(event:any){
    if(event.charCode == 13){
      this.todo.insertNew(this.newValue);
      this.newValue = '';
    }
  }


  onSetToInactive(index:number){
    this.todo.setToInactive(index);
  }
  onSetToActive(index:number){
    this.todo.setToActive(index);
  }

  onDelete(event:any){
    const element = event.target.parentElement.parentElement.children[1].innerText;
    this.todo.deleteItem(element);
  }

  onClear(){
    this.todo.clear();
  }

  changeTab(event:any){
    const myState = event.target.innerText;
    if(myState == 'All'){
      event.target.parentElement.children[1].classList.remove('tabActive');
      event.target.parentElement.children[2].classList.remove('tabActive');
      event.target.classList.add('tabActive');
      this.showActive = true;
      this.showInactive = true;
    }else if(myState == 'Active'){
      event.target.parentElement.children[0].classList.remove('tabActive');
      event.target.parentElement.children[2].classList.remove('tabActive');
      event.target.classList.add('tabActive');
      this.showActive = true;
      this.showInactive = false;
    }else{
      event.target.parentElement.children[0].classList.remove('tabActive');
      event.target.parentElement.children[1].classList.remove('tabActive');
      event.target.classList.add('tabActive');
      this.showActive = false;
      this.showInactive = true;
    }
  }
}
