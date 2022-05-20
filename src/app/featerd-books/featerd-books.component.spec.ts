import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaterdBooksComponent } from './featerd-books.component';

describe('FeaterdBooksComponent', () => {
  let component: FeaterdBooksComponent;
  let fixture: ComponentFixture<FeaterdBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaterdBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaterdBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
