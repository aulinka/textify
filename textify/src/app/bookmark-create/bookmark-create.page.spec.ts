import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkCreatePage } from './bookmark-create.page';

describe('BookmarkCreatePage', () => {
  let component: BookmarkCreatePage;
  let fixture: ComponentFixture<BookmarkCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
