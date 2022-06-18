import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(private productService: ProductsService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getProductById(this.route.snapshot.paramMap.get("id")||"").subscribe(
      (product:any) => {
        this.product=product.data;
      }
      )
  }
  addToCart(prod:any){
    console.log(prod);
    
   let test=false
       // @ts-ignore
   if(JSON.parse(localStorage.getItem('cart')) ){
    let storage:any = JSON.parse(localStorage.getItem('cart')||"")      
    for (let i = 0; i < storage.products.length; i++) {
      if(storage.products[i]._id===prod._id){
        storage.products[i].quantity++
        test=true
        break
      }      
    }
    prod.quantity=1
    !test?storage.products.push(prod):storage.products
    localStorage.setItem('cart',JSON.stringify({products:storage.products}))
   }
   else{
    prod.quantity=1
    localStorage.setItem('cart',JSON.stringify({products:[prod]}))
   }
   
  }

}
