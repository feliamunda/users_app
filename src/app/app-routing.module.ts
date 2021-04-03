import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { IndexComponent } from './pages/index/index.component'
import { UsersListComponent } from './pages/users/users-list/users-list.component';


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
