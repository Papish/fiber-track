import { Component, Input } from '@angular/core';

@Component({
  selector: 'ft-map-device-marker',
  templateUrl: './map-device-marker.component.html',
  styleUrls: ['./map-device-marker.component.scss']
})
export class MapDeviceMarkerComponent {
	@Input() devices: any[];
}
