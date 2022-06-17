import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-one-order',
  templateUrl: './one-order.component.html',
  styleUrls: ['./one-order.component.css']
})
export class OneOrderComponent implements OnInit {
@Input() cart:any
 user:any
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
   this.userService.getUserById(this.cart.userId).subscribe(
    user=>{this.user=user}  
   )
  }

}
