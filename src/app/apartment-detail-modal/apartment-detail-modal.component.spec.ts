import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentDetailModalComponent } from './apartment-detail-modal.component';

describe('ApartmentDetailModalComponent', () => {
  let component: ApartmentDetailModalComponent;
  let fixture: ComponentFixture<ApartmentDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
