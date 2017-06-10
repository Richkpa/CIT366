import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[cmsDropdowm]'
})
export class DropdowmDirective {

  constructor() { }
//   @HostBinding('class.open') isOpen = false;
//
// @HostListener('click') toggleOpen(){
//   this.isOpen = true;
// }
//   @HostListener('mouseleave') toggleclose(){
//     this.isOpen = false;
//   }

  @HostBinding('class.open') get opened()
  {
    return this.isOpen;
  }
  @HostListener('click') open()
  {
    this.isOpen=true;
  }
  @HostListener('mouseleave') close()
  {
    this.isOpen=false;
  }
  private isOpen=false;

}
