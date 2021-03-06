import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SubnavComponent } from './subnav/subnav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { InternalComponent } from './internal/internal.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SubnavComponent,
    BreadcrumbComponent,
    InternalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
