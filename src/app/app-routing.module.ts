import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './maps/containers/google-map/google-map.component';
import { TestComponent } from './dashboard/containers/test/test.component';

const routes: Routes = [
	{
		path: '',
		component: TestComponent
	},
	{
		path: 'maps',
		component: GoogleMapComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
