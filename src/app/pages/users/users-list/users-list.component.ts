import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

import { User } from '../../../interfaces/user'


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList: User[] = [];

  tableOpts:any = {}
  tableRows:any;
  tableColumns:any; 

  
  constructor(
    public user : UserService,   
    private auth : AuthenticationService 
  ) { }

  ngOnInit(): void {
    this.tableOpts= {
      pageSize : 10,
      loadingIndicator : true,
      reorderable : true,
      pageNumber: 1,
      messages: {
        emptyMessage: 'No hay datos para mostrar',
        totalMessage: 'Total'
      },
      pages: []
    };
    this.tableColumns = [
      {prop: 'username', name:'Username',flexGrow:1},
      {prop: 'name', name:'Nombre',flexGrow:1},
      {prop: 'lastName', name:'Apellido',flexGrow:1},
      {prop: 'role', name:'Rol',flexGrow:1},
      {prop: 'age', name:'Edad',flexGrow:1},
      {prop: 'createdAt', name:'Fecha de Registro',flexGrow:1, pipe:  new DateFormatPipe() },
    ]
    
    this.user.getUsers().subscribe(
      (r:any)=>{
        r.forEach((user:any) => {
            this.userList.push(
            {
              username : user.username,
              role : user.role,
              name : user.name,
              lastName: user.lastName,
              birthday: user.birthday,
              email: user.email,
              age: user.age,
              active: user.active,
              createdAt: user.createdAt,
              updatedAt: user.updatedAt
            }
          )
        });
        this.tableOpts.loadingIndicator = false;
        for (let index = 0; index < Math.floor(this.userList.length/this.tableOpts.pageSize); index++) {
          this.tableOpts.pages.push(index+1);
        }
               
        this.tableRows = this.userList
      }, (err)=>this.auth.isValidResponse(err))
  }

  goPage(page: number){
    if (page <= 0)
      page = 1;
    this.tableOpts.pageNumber = page;
  }

  showNavButton(page:number){
    let offset = this.tableOpts.pageNumber
    let show = false
    if ( (offset - 3 <= page  && page <= offset+3 ) || (page <= 7 && offset <= 3) || (page >= this.tableOpts.pages.length - 6 && offset >= this.tableOpts.pages.length - 3) )
      show = true
    return show
  }

}