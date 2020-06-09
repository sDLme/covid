import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[forScreen]'
})
export class ForScreenDirective implements OnInit {

  constructor( private element: ElementRef) { }

  ngOnInit(): void {

  }

}
