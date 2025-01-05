import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinChangePage } from './pin-change.page';

describe('PinChangePage', () => {
  let component: PinChangePage;
  let fixture: ComponentFixture<PinChangePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PinChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
