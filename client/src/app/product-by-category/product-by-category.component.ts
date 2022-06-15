import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})

export class ProductByCategoryComponent implements OnInit {
  allProducts:any;
  constructor(private productService: ProductsService) { }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.allProducts=data;
      }
    )
    console.log(this.allProducts);
    
  }

}
