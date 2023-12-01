import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReqComponent } from './book-req.component';

describe('BookReqComponent', () => {
  let component: BookReqComponent;
  let fixture: ComponentFixture<BookReqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookReqComponent]
    });
    fixture = TestBed.createComponent(BookReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
