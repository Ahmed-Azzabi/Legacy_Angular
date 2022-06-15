import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent implements OnInit {
  allProducts: any;
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.allProducts = data;
    });
    console.log(this.allProducts);
  }
  deleteProd(id: string) {
    this.productService.deleteProduct(id).subscribe((res) => {
      console.log(res);
    });
    this.ngOnInit();
  }
}
