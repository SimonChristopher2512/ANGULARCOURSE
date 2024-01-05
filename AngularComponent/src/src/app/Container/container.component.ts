//to make a class as a component we need to decorate it with @Component Decorator
//@Component(class) is available in '@angular/core',so we need to import in this file


import { Component } from "@angular/core";

//passing annonymous object to this concept

@Component({
    selector:'app-container',
    templateUrl:'./container.component.html',
    styleUrls:['./container.component.css']
})
export class ContainerComponent//export is used to access the class outside the file
{

}