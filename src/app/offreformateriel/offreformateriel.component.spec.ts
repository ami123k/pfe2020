import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreformaterielComponent } from './offreformateriel.component';

describe('OffreformaterielComponent', () => {
  let component: OffreformaterielComponent;
  let fixture: ComponentFixture<OffreformaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreformaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreformaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
