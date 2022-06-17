import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(private productService: ProductsService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getProductById(this.route.snapshot.paramMap.get("id")||"").subscribe(
      product => {
        this.product=product;
      }
      )
  }

}
