import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {


  activeItems = ['one', 'two', 'three'];
  constructor() { }

  ngOnInit(): void {
  }

}
