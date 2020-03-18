import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnreprisebymaterielComponent } from './enreprisebymateriel.component';

describe('EnreprisebymaterielComponent', () => {
  let component: EnreprisebymaterielComponent;
  let fixture: ComponentFixture<EnreprisebymaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnreprisebymaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnreprisebymaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
