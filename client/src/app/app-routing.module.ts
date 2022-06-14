import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartElementComponent } from './cart-element/cart-element.component';
import { ContainerComponent } from './container/container.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'cartelement',component:CartElementComponent},
  {path:'productbycategorie',component:ProductByCategoryComponent},
  {path:'shoppingcart',component:ShoppingCartComponent},
  {path:'myaccount',component:UserComponent},
  {path:'productdetail',component:ProductDetailComponent},
  {path:'home',component:ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
