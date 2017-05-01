import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  authenticated: boolean;
  connected: boolean;

  ngOnInit() {
    this.authenticated = false;
    this.connected = false;
  }

  login() {
    this.authenticated =! this.authenticated;
  }

  connexion(){
    this.connected = true;
  }

  deconnexion(){
    this.connected = false;
  }

}
