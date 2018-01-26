import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent, TestDialogComponent } from './containers/test/test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestComponent, 
    TestDialogComponent
  ],
  entryComponents: [
    TestDialogComponent
  ]
})
export class DashboardModule { }
