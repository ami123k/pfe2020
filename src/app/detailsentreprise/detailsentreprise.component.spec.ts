import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsentrepriseComponent } from './detailsentreprise.component';

describe('DetailsentrepriseComponent', () => {
  let component: DetailsentrepriseComponent;
  let fixture: ComponentFixture<DetailsentrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsentrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
