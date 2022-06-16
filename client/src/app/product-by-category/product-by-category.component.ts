import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})




export class ProductByCategoryComponent implements OnInit {
  allProducts:any;
  constructor(private productService: ProductsService,private router: Router,
    private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      products => {
        this.allProducts=products;
      }

    )

    
    }
    
    seeMore(): void{
      this.router.navigateByUrl('/ajout');




}

