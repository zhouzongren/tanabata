import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
