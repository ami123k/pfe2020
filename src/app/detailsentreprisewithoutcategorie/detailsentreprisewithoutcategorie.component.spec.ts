import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsentreprisewithoutcategorieComponent } from './detailsentreprisewithoutcategorie.component';

describe('DetailsentreprisewithoutcategorieComponent', () => {
  let component: DetailsentreprisewithoutcategorieComponent;
  let fixture: ComponentFixture<DetailsentreprisewithoutcategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsentreprisewithoutcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsentreprisewithoutcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
