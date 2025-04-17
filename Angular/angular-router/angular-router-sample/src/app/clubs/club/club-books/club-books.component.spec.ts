import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubBooksComponent } from './club-books.component';

describe('ClubBooksComponent', () => {
  let component: ClubBooksComponent;
  let fixture: ComponentFixture<ClubBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
