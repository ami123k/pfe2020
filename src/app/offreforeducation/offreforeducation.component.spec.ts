import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreforeducationComponent } from './offreforeducation.component';

describe('OffreforeducationComponent', () => {
  let component: OffreforeducationComponent;
  let fixture: ComponentFixture<OffreforeducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreforeducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreforeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
