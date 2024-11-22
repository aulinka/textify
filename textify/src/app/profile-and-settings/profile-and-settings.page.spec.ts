import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileAndSettingsPage } from './profile-and-settings.page';

describe('ProfileAndSettingsPage', () => {
  let component: ProfileAndSettingsPage;
  let fixture: ComponentFixture<ProfileAndSettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAndSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
