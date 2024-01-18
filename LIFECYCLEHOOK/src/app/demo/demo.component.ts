import { Component, Input ,OnInit,OnChanges,SimpleChanges, DoCheck,
         AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
                                      AfterContentChecked,AfterViewInit,AfterViewChecked
{
  @Input() value:string='procademy';//value comes from inputText in app.comp.html

  constructor()
  {
    console.log('Constructor Called!');
    //console.log(this.value);
  }

  //If Any Changes in any property it is called Everytime
  //If we Update the Same Value ,it'll not be called
  ngOnChanges(change:SimpleChanges)
  {
    console.log('ngOnChanges Called!');
    console.log(change);
  }
//Only at the time of first initialization it is called 
  ngOnInit()
  {
    console.log('ngOnInit Called!');
    //console.log(this.value);

  }
  //It is called every change detection time
  //Even if we update the same text again
  ngDoCheck()
  {
    console.log("ngDoCheck Called!");
  }

  //this is called after the projected content is Initialized
  ngAfterContentInit()
  {
    console.log('ngAfterContentInit Called');
  }
  ngAfterContentChecked()
  {
    console.log('ngAfterContentChecked Called');
  }

  //this is called after the component view and its child views are fully initialized
  //this hook too called only once
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit Called');
  }

  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy()
  {
    console.log("ngOnDestroy Called");
  }


}
