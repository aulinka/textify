import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkEditOcrPage } from './bookmark-edit-ocr.page';

describe('BookmarkDetailPage', () => {
  let component: BookmarkEditOcrPage;
  let fixture: ComponentFixture<BookmarkEditOcrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkEditOcrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
