import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { MapDevice } from '../models/map-device.model';
import { baseUrl } from '../constants/server';

@Injectable()
export class DevicesService {

  constructor(private http: HttpClient) { 
  	//
  }

  /**
   * Send get api request to fetch all map devices from the database
   *
   * @return Observable object
   */
  getAllDevices(): Observable<MapDevice[]> {
  	return this.http.get<MapDevice[]>(baseUrl + 'devices');
  }

  /**
   * Send post api request to new map device to database
   * 
   * @return Observable object
   */
  saveNewDevice(payload): Observable<MapDevice> {
  	return this.http.post<MapDevice>(baseUrl + 'devices/add', payload);
  }

  /**
   * Send get api request to fetch detail information of single map device
   *
   * @return Observable object
   */
  getDeviceDetailById(id): Observable<MapDevice> {
    return this.http.get<MapDevice>(baseUrl + 'devices/info/' + id);
  }
}
