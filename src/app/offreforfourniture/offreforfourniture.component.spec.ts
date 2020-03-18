import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreforfournitureComponent } from './offreforfourniture.component';

describe('OffreforfournitureComponent', () => {
  let component: OffreforfournitureComponent;
  let fixture: ComponentFixture<OffreforfournitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreforfournitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreforfournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
