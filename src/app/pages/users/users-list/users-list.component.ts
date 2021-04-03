import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { User } from '../../../interfaces/user'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList: User[] = [];
  paginationSize: number = 1;
  maxItemsPerPage: number = 10;

  constructor(
    public user : UserService
  ) { }

  ngOnInit(): void {
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
        this.calculatePagination()
      })
  }

  calculatePagination(){
    this.paginationSize = Math.ceil(this.userList.length/ this.maxItemsPerPage) 
  }

}
