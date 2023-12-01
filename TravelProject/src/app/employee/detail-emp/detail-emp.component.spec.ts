import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmpComponent } from './detail-emp.component';

describe('DetailEmpComponent', () => {
  let component: DetailEmpComponent;
  let fixture: ComponentFixture<DetailEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEmpComponent]
    });
    fixture = TestBed.createComponent(DetailEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
