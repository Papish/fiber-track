import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FibersService } from '../../services/fibers.service';
import { Fiber } from '../../models/fiber.model';
import * as fromMap from '../../reducers';

@Component({
  selector: 'ft-map-device-dialog',
  templateUrl: './map-device-dialog.component.html',
  styleUrls: ['./map-device-dialog.component.scss']
})
export class MapDeviceDialogComponent implements OnInit {
  fibers$: Observable<Fiber[]>;

  newFiber = [];
  addCount = 0;
  selectedId: number = null;

  constructor(
    public store: Store<fromMap.AppState>,
    public fibers: FibersService,
    public dialogRef: MatDialogRef<MapDeviceDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) { 
    console.log(data);
  }

  ngOnInit() {
    this.fibers$ = this.fibers.fetchAll();
  }

  /**
   * Add selected fiber to new fiber array
   * This is not saved and used to select core for making
   * new connection
   * 
   */
  fiberAdd(fiber) {
    if (this.addCount !== 0) {
      return;
    }
    this.newFiber.push(fiber);
    this.addCount += 1;
  }

  /**
   * Set selected id for connection fiber 
   *
   */
  selectedFiber(id) {
    this.selectedId = id;
  }
}
