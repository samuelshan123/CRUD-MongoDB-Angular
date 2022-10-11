import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'',component:AddUserComponent},
  {path:'users-list',component:UsersListComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'edit-user/:id',component:AddUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
