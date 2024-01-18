import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent 
{
  selectedCustomer:any;
  customers:Customer[]=[
    {customerNo:1,name:'Mark Vought',address:'',city:'London',country:'UK'},
    {customerNo:2,name:'John Smith',address:'',city:'NYC',country:'USA'},
    {customerNo:3,name:'MerryAnn',address:'',city:'Berlin',country:'Germany'},
    {customerNo:4,name:'Simon Chris',address:'',city:'Tennesse',country:'USA'},
    {customerNo:5,name:'Rahul Raj',address:'',city:'Delhi',country:'India'}
  ];
  
}
