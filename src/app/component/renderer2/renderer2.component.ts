import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.css']
})
export class Renderer2Component implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onChangeBackground(monElementHTML: HTMLElement) {
    this.renderer.setStyle(monElementHTML, 'background-color', 'red');
  }

}
