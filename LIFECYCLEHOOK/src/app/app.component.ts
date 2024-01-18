import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LIFECYCLEHOOK';

  inputText:string='';

  destroy:boolean=true;

  destroyComponent()
  {
    this.destroy=false;
  }

  // To get the input from reference variable #input
  onSubmit(inputEl:HTMLInputElement)
  {
    this.inputText=inputEl.value;
  }
}
