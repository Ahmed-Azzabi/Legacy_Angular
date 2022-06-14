import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartElementComponent } from './cart-element/cart-element.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { UserComponent } from './user/user.component';
import { NavigateProductsComponent } from './navigate-products/navigate-products.component';
import { BeautyComponent } from './navigate-products/beauty/beauty.component';
import { ElectronicsComponent } from './navigate-products/electronics/electronics.component';
import { HomeAndGardenComponent } from './navigate-products/home-and-garden/home-and-garden.component';
import { JewerlyWatchesComponent } from './navigate-products/jewerly-watches/jewerly-watches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,
    ShoppingCartComponent,
    CartElementComponent,
    ProductByCategoryComponent,
    UserComponent,
    NavigateProductsComponent,
    BeautyComponent,
    ElectronicsComponent,
    HomeAndGardenComponent,
    JewerlyWatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
