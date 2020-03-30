import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreadminfournitureComponent } from './offreadminfourniture.component';

describe('OffreadminfournitureComponent', () => {
  let component: OffreadminfournitureComponent;
  let fixture: ComponentFixture<OffreadminfournitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreadminfournitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreadminfournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
