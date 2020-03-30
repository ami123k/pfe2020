import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionfournisseurComponent } from './propositionfournisseur.component';

describe('PropositionfournisseurComponent', () => {
  let component: PropositionfournisseurComponent;
  let fixture: ComponentFixture<PropositionfournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionfournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
