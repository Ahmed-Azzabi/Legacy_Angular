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
import { ProductDetailComponent } from './product-detail/product-detail.component';

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
    AdminSeeOrdersComponent

    ShoppingCartComponent,
    CartElementComponent,
    ProductByCategoryComponent,
    UserComponent,
    ProductDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
