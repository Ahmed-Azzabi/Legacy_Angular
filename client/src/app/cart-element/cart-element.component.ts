import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.css']
})
export class CartElementComponent implements OnInit {

 
  @Input() p: any
  @Input() delete:any
  cart: any = {};
  cartForm: FormGroup | any;
  constructor(private cartsService: CartsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    
    this.cartForm = this.formBuilder.group({
      exemple: [''],

    })
  }
  add() {
    if (this.p.quantity < this.p.stock) {
    this.p.quantity++
  }
  }
  sub() {
    if (this.p.quantity > 1) {
      this.p.quantity--
    }
  }
  
  addCart() {
    console.log('Here my cart object', this.cart);
    this.cartsService.addCart(this.cart).subscribe(
      () => {
        console.log('Match added successfully');
        // this.router.navigate(['home']);
      }
    )
  }

}
