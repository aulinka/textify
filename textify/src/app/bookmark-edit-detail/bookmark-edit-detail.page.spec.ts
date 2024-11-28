import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkEditDetailPage } from './bookmark-edit-detail.page';

describe('BookmarkDetailPage', () => {
  let component: BookmarkEditDetailPage;
  let fixture: ComponentFixture<BookmarkEditDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkEditDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
