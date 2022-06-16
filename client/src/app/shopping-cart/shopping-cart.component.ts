import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart:any={user:{userName:"test",userId:"test"}
  ,products:[
    {productName:"p1",id:"11",imageUrl:"",stock:20,quantity:1,price:20},{productName:"p2",id:"12",imageUrl:"",stock:5,quantity:1,price:20},{productName:"p3",id:"13",imageUrl:"",stock:10,quantity:1,price:20}
  ]}
  constructor() { }

  ngOnInit(): void {
  }

}
