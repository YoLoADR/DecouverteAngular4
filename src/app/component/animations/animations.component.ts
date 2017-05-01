import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('updateBgColor', [
      state('blue', style({
        backgroundColor: 'blue'
      })),
      state('white', style({
        backgroundColor: 'white'
      })),
      transition('blue => white', animate(300)),
      transition('white => blue', animate(300))
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  color:any;

  constructor() { }

  ngOnInit() {
    this.color = 'white';
  }

  updateBgColor() {
    this.color = this.color === 'white' ? 'blue' : 'white'; 
  } 

}
