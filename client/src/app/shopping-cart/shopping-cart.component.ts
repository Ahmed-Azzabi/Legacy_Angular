import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart:any={user:{userName:"test",userId:"test"}

            ,products:[
              {productName:"p1",id:"11",imageUrl:"",stock:20,quantity:1},{productName:"p2",id:"12",imageUrl:"",stock:5,quantity:1},{productName:"p3",id:"13",imageUrl:"",stock:10,quantity:1}
            ]}
  order:any={userId:"test",products:[]}       
  constructor(private cartService:CartsService,private router:Router) {
    this.del=this.del.bind(this)
   }


  ngOnInit(): void {
  }
  del(id:string):void{
   this.cart.products=this.cart.products.filter((element:any)=>{return element.id!==id})
  }
  postCart(){
    this.order.products=this.cart.products.map((e:any)=>{return {productId:e.id,quantity:e.quantity}})
    this.cartService.addCart(this.order).subscribe(()=>{
      console.log("cart saved");
    })
  }
}
