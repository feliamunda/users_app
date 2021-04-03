import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title: String | undefined;
  welcomeMsg: String | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.title= 'Login';
    this.welcomeMsg= 'Bienvenido a la Aplicación web para consulta de usuarios';
  }

}
