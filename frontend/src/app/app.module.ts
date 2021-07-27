import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UserService } from './services/user.service';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { FormsModule } from '@angular/forms';
import { AdminUserUpdateComponent } from './admin-user-update/admin-user-update.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUsersComponent,
    AdminAddUserComponent,
    AdminUserUpdateComponent,
    AdminComponent,
    AddNewProductComponent,
    ManageProductsComponent,
    ProductUpdateComponent,
    ProductDetailsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
