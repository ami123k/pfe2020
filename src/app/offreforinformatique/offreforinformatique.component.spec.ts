import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreforinformatiqueComponent } from './offreforinformatique.component';

describe('OffreforinformatiqueComponent', () => {
  let component: OffreforinformatiqueComponent;
  let fixture: ComponentFixture<OffreforinformatiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreforinformatiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreforinformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
