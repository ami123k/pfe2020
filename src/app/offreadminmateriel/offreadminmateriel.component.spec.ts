import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreadminmaterielComponent } from './offreadminmateriel.component';

describe('OffreadminmaterielComponent', () => {
  let component: OffreadminmaterielComponent;
  let fixture: ComponentFixture<OffreadminmaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreadminmaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreadminmaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
