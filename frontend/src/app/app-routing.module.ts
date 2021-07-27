import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminUserUpdateComponent } from './admin-user-update/admin-user-update.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'admin-users', pathMatch:'full'},
  {path:'admin/users', component:AdminUsersComponent},
  {path:'admin/addUser', component: AdminAddUserComponent},
  {path: 'admin/users/update/:id', component:AdminUserUpdateComponent},
  {path: 'homepage', component: HomepageComponent},
  {path:'category-listing', component: CategoryListingComponent},
  {path:'product-detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
