import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnreprisebyfournitureComponent } from './enreprisebyfourniture.component';

describe('EnreprisebyfournitureComponent', () => {
  let component: EnreprisebyfournitureComponent;
  let fixture: ComponentFixture<EnreprisebyfournitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnreprisebyfournitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnreprisebyfournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
