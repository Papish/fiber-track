import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ft-map-device-new',
  templateUrl: './map-device-new.component.html',
  styleUrls: ['./map-device-new.component.scss']
})
export class MapDeviceNewComponent {
	@Input() devices: any[];

	@Output() save: EventEmitter<any> = new EventEmitter();
	@Output() clear: EventEmitter<any> = new EventEmitter();

	formData = { name: '', description: ''};

	submit(latitude, longitude) {
		const payload = {
			name: this.formData.name,
			description: this.formData.description,
			latitude,
			longitude
		};

		this.save.emit(payload);
	}
}
