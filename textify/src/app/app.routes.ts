import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'profile-and-settings',
    loadComponent: () => import('./profile-and-settings/profile-and-settings.page').then( m => m.ProfileAndSettingsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'bookmark/:id',
    loadComponent: () => import('./bookmark/bookmark.page').then( m => m.BookmarkPage)
  },
  {
    path: 'bookmark-edit-ocr/:id',
    loadComponent: () => import('./bookmark-edit-ocr/bookmark-edit-ocr.page').then(m => m.BookmarkEditOcrPage)
  },
  {
    path: 'bookmark-edit-detail/:id',
    loadComponent: () => import('./bookmark-edit-detail/bookmark-edit-detail.page').then(m => m.BookmarkEditDetailPage)
  },
  {
    path: 'bookmark-create',
    loadComponent: () => import('./bookmark-create/bookmark-create.page').then( m => m.BookmarkCreatePage)
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./onboarding/onboarding.page').then( m => m.OnboardingPage)
  },
  {
    path: 'pin-change',
    loadComponent: () => import('./pin-change/pin-change.page').then( m => m.PinChangePage)
  },
];
