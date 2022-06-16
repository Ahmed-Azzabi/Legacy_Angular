import { Component, OnInit } from '@angular/core';

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
  cart2:any={products:[]}       
  constructor() {
    this.del=this.del.bind(this)
   }

  ngOnInit(): void {
  }
  del(id:string):void{
   this.cart.products=this.cart.products.filter((element:any)=>{return element.id!==id})
  }
}
