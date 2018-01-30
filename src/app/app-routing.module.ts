import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './maps/containers/google-map/google-map.component';

import { HomeComponent } from './dashboard/containers/home/home.component';
import { FibersComponent } from './dashboard/containers/fibers/fibers.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'fibers',
				component: FibersComponent
			}
		]
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
