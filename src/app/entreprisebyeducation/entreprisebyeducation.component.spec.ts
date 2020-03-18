import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisebyeducationComponent } from './entreprisebyeducation.component';

describe('EntreprisebyeducationComponent', () => {
  let component: EntreprisebyeducationComponent;
  let fixture: ComponentFixture<EntreprisebyeducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprisebyeducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisebyeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
