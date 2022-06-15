import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminSeeOrdersComponent } from './admin-see-orders/admin-see-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartElementComponent } from './cart-element/cart-element.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavigateProductsComponent } from './navigate-products/navigate-products.component';
import { BeautyComponent } from './navigate-products/beauty/beauty.component';
import { ElectronicsComponent } from './navigate-products/electronics/electronics.component';
import { HomeAndGardenComponent } from './navigate-products/home-and-garden/home-and-garden.component';
import { JewerlyWatchesComponent } from './navigate-products/jewerly-watches/jewerly-watches.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,

    AdminViewComponent,
    AdminAddProductComponent,
    AdminUpdateProductComponent,
    AdminSeeOrdersComponent,

    ShoppingCartComponent,
    CartElementComponent,
    ProductByCategoryComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
    NavigateProductsComponent,
    BeautyComponent,
    ElectronicsComponent,
    HomeAndGardenComponent,
    JewerlyWatchesComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
