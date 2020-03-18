import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnreprisebyinformatiqueComponent } from './enreprisebyinformatique.component';

describe('EnreprisebyinformatiqueComponent', () => {
  let component: EnreprisebyinformatiqueComponent;
  let fixture: ComponentFixture<EnreprisebyinformatiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnreprisebyinformatiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnreprisebyinformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
