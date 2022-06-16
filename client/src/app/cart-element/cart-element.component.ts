import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.css']
})
export class CartElementComponent implements OnInit {
  @Input() product:any
 
  constructor() { }

  ngOnInit(): void {
  }

}
