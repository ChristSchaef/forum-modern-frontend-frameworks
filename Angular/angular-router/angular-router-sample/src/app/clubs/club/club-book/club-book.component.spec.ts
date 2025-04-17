import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubBookComponent } from './club-book.component';

describe('ClubBookComponent', () => {
  let component: ClubBookComponent;
  let fixture: ComponentFixture<ClubBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
