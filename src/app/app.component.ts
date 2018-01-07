import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Rx';

console.log(ProductService);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public list;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.list().subscribe(data => {
      console.log(data);
      this.list = data;
    }, err => {
      console.log('error', err);
    }, () => {
      console.log('done');
    });
  }
}
