import { Component, ContentChild, ElementRef, OnInit ,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterContentInit
{

  //this is undefined because @ContentChild or @ViewChild will be initialized just before the
  // ngAfterContentInit hook so it is undefined.
  ngOnInit()
  {
    console.log(this.paragraphEl);
  }
  @ContentChild('paragraph')paragraphEl!: ElementRef;


  ngAfterContentInit()
  {
    this.paragraphEl.nativeElement.textContent='This is a new paragraph';
    console.log(this.paragraphEl);
  }

}
