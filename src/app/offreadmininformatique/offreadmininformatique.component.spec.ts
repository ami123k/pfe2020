import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreadmininformatiqueComponent } from './offreadmininformatique.component';

describe('OffreadmininformatiqueComponent', () => {
  let component: OffreadmininformatiqueComponent;
  let fixture: ComponentFixture<OffreadmininformatiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreadmininformatiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreadmininformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
