import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  //b4 used for event binding 
  //now it is used for 2 way binding
  searchValue:string='';

  changeSearchValue(eventData:Event)
  {
    // console.log((<HTMLInputElement>eventData.target).value);
    // console.log(eventData);
    this.searchValue=(<HTMLInputElement>eventData.target).value;
  }
}
