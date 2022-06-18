import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css'],
})
export class ProductByCategoryComponent implements OnInit {
  allProducts: any;
  //@ts-ignore
  searchText;
  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.productService.getAllProducts().subscribe((products: any) => {
      this.allProducts = products.filter((e: any) => {
        if (this.route.snapshot.paramMap.get('category') === 'jewerly') {
          return e.category === 'Jewlery and Watches';
        } else if (this.route.snapshot.paramMap.get('category') === 'beauty') {
          return e.category === 'Beauty Product';
        } else if (
          this.route.snapshot.paramMap.get('category') === 'electronics'
        ) {
          return e.category === 'Computer Electronic';
        } else if (
          this.route.snapshot.paramMap.get('category') === 'home&garden'
        ) {
          return e.category === 'Home And Garden';
        } else {
          return e;
        }
      });
      console.log(this.allProducts);
    });
  }

  addToCart(prod: any) {
    console.log(prod);

    let test = false;
    // @ts-ignore
    if (JSON.parse(localStorage.getItem('cart'))) {
      let storage: any = JSON.parse(localStorage.getItem('cart') || '');
      for (let i = 0; i < storage.products.length; i++) {
        if (storage.products[i]._id === prod._id) {
          storage.products[i].quantity++;
          test = true;
          break;
        }
      }
      prod.quantity = 1;
      !test ? storage.products.push(prod) : storage.products;
      localStorage.setItem(
        'cart',
        JSON.stringify({ products: storage.products })
      );
    } else {
      prod.quantity = 1;
      localStorage.setItem('cart', JSON.stringify({ products: [prod] }));
    }
  }

  seeMore(id: string): void {
    this.router.navigate(['/productdetail', id]);
  }
}
