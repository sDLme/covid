import { Directive, TemplateRef, ViewContainerRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[forScreen]'
})
export class ForScreenDirective implements OnInit {

  public width: any;
  @Input() forScreen: any;


  constructor( 
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ){ }

    ngOnInit() {
     // this.viewContainer.createEmbeddedView(this.templateRef);
      this.width = window.innerWidth

      switch(this.forScreen) { 
        case 'mobile' : { 
          if(screen.availWidth <= 600){
            this.viewContainer.clear();
            console.log('mobile->',screen.availWidth);
            console.log('works')
          }
           break; 
        } 
        case 'tablet' && this.width <= 1024: { 
          this.viewContainer.clear();
          console.log('tablet-> ',screen);
          console.log('works')
           break; 
        } 
        case 'descop' && this.width > 1024: { 
          this.viewContainer.clear();
           console.log('desctop->',screen);
           console.log('works')
           break; 
        } 
        default: { 
          this.viewContainer.createEmbeddedView(this.templateRef);
           console.log('show')
           break; 
        } 
     } 
  
      console.log(this.width)
      console.log(this.forScreen)
    }


  @HostListener('window:resize', ['$event'])
   onResize(event) {
     this.width = window.innerWidth
     this.hide(this.forScreen)
}

public hide(screen: any) {
  switch(screen) { 
    case 'mobile' && this.width <= 600: { 
      this.viewContainer.clear();
        console.log('mobile->',screen);
        console.log('works')
       break; 
    } 
    case 'tablet' && this.width <= 1024: { 
      this.viewContainer.clear();
      console.log('tablet-> ',screen);
      console.log('works')
       break; 
    } 
    case 'descop' && this.width > 1024: { 
      this.viewContainer.clear();
       console.log('desctop->',screen);
       console.log('works')
       break; 
    } 
    default: { 
      this.viewContainer.createEmbeddedView(this.templateRef);
       console.log('show')
       break; 
    } 
 } 
}

}
