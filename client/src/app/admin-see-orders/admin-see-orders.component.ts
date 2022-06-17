import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts.service';
import { UsersService } from '../services/users.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-see-orders',
  templateUrl: './admin-see-orders.component.html',
  styleUrls: ['./admin-see-orders.component.css'],
})
export class AdminSeeOrdersComponent implements OnInit {
  allCarts: any;
  allUsers: any;
  constructor(
    private cartService: CartsService,
    private usersService: UsersService,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.cartService.getAllcarts().subscribe((carts) => {
      this.allCarts = carts.carts;
      console.log(carts);
    });
  }

  getUser(id: string) {
    this.usersService.getUserById(id).subscribe((data) => {
      console.log(data);
    });
  }
}
