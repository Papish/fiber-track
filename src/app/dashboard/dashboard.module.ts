import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { FibersComponent } from './containers/fibers/fibers.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    FibersComponent,
    NavBarComponent
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class DashboardModule { }
