import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from './product-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:any[] = []

  constructor(private services:ProductServicesService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.services.getAllProducts().subscribe((res:any) => {
     this.products = res

    }
      )
  }


}
