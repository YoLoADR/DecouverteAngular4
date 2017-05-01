import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveEmailComponent } from './directive-email.component';

describe('DirectiveEmailComponent', () => {
  let component: DirectiveEmailComponent;
  let fixture: ComponentFixture<DirectiveEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
