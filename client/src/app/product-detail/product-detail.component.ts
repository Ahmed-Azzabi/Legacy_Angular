import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  allProducts:any;
  constructor(private productService: ProductsService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      products => {
        this.allProducts=products;
      }
      )
      console.log(this.route.snapshot.paramMap.get("id"))
  }

}
