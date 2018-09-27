import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const routes: Routes = [
  { path: '', loadChildren: './pages/music/music.module#MusicModule', data: { title: '音乐' } },
  // { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule', data: { title: '404' }}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0]
});