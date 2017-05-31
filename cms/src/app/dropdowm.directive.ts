import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[cmsDropdowm]'
})
export class DropdowmDirective {
  @HostBinding('class.open') isOpen = false;

@HostListener('click') toggleOpen(){
  this.isOpen = !this.isOpen;
}
  constructor() { }

}
