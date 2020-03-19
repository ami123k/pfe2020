import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterentrepriseComponent } from './ajouterentreprise.component';

describe('AjouterentrepriseComponent', () => {
  let component: AjouterentrepriseComponent;
  let fixture: ComponentFixture<AjouterentrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterentrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
