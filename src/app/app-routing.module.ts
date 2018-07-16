import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';
import { InternalComponent } from './internal/internal.component';

export const AppRoutes: Routes = [
	{ path: 'internal', component: InternalComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
