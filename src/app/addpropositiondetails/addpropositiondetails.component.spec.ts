import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropositiondetailsComponent } from './addpropositiondetails.component';

describe('AddpropositiondetailsComponent', () => {
  let component: AddpropositiondetailsComponent;
  let fixture: ComponentFixture<AddpropositiondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpropositiondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpropositiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
