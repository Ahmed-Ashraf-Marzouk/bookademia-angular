import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcollectionComponent } from './bookcollection.component';

describe('BookcollectionComponent', () => {
  let component: BookcollectionComponent;
  let fixture: ComponentFixture<BookcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
