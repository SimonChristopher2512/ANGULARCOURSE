import { Directive, ElementRef,OnInit } from "@angular/core";
//we need to make a custom attribute directives so we are importing Directive

@Directive({
    selector:'[setBackground]'
})
export class SetBackgroundDirective implements OnInit
{
    private element!:ElementRef;
    
    constructor(element:ElementRef)
    {
        // element.nativeElement.style.backgroundColor='#C8E6C9';
        this.element=element;
    }
    ngOnInit()
    {
        this.element.nativeElement.style.backgroundColor='#C8E6C9';
    }
}