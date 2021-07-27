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
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUsersComponent,
    AdminAddUserComponent,
    AdminUserUpdateComponent,
    HomepageComponent,
    CarouselComponent,
    CategoryListingComponent,
    ProductDetailComponent
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
