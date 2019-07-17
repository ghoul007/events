import { Directive, ElementRef, Renderer, OnInit } from "@angular/core";

@Directive({
  selector: "[appNameCheck]"
})
export class NameCheckDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer) {}

  ngOnInit() {
    this.el.nativeElement.pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  }
}
