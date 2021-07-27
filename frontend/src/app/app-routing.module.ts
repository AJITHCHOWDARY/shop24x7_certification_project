import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminUserUpdateComponent } from './admin-user-update/admin-user-update.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

const routes: Routes = [
  {path:'', redirectTo:'admin-users', pathMatch:'full'},
  {path:'admin/users', component:AdminUsersComponent},
  {path:'admin/addUser', component: AdminAddUserComponent},
  {path: 'admin/users/update/:id', component:AdminUserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
