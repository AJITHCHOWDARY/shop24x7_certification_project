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

@NgModule({
  declarations: [
    AppComponent,
    AdminUsersComponent,
    AdminAddUserComponent,
    AdminUserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
