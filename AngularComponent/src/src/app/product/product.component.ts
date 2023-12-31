import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent 
{
  products=[
    {id:1,name:"Minimalists Analog Watch",price:"109",color:"Black",available:"Available",image:"/assets/product-image-1.jpeg"},
    {id:2,name:"Hi-Sense Ultra HD Smart TV",price:"3339",color:"Black",available:"Available",image:"/assets/product-image-2.jpeg"},
    {id:3,name:"Apple iPhone 12",price:"1855",color:"Black",available:"Not Available",image:"/assets/product-image-3.jpeg"},
    {id:4,name:"LG fully automatic machine",price:"1765",color:"Violet",available:"Available",image:"/assets/product-image-4.jpeg"},
    {id:5,name:"LG Refridgerator",price:"2815",color:"White",available:"Not Available",image:"/assets/product-image-5.jpeg"},
    {id:6,name:"Dell Inspiron one 27 Ryzen 7",price:"2145",color:"Grey",available:"Available",image:"/assets/product-image-6.jpeg"},
  ];
}
