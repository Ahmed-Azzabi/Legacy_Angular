import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminSeeOrdersComponent } from './admin-see-orders/admin-see-orders.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
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
  { path: 'addproduct', component: AdminAddProductComponent },
  { path: 'seeorders', component: AdminSeeOrdersComponent },
  { path: 'updateproduct', component: AdminUpdateProductComponent },
  { path: 'adminview', component: AdminViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
