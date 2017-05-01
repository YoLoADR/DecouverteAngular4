import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfAndAsynchronismeComponent } from './ng-if-and-asynchronisme.component';

describe('NgIfAndAsynchronismeComponent', () => {
  let component: NgIfAndAsynchronismeComponent;
  let fixture: ComponentFixture<NgIfAndAsynchronismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfAndAsynchronismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfAndAsynchronismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
