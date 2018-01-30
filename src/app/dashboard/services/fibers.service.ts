import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Fiber } from '../models/fibers.model';
import { baseUrl } from '../../shared/server';

@Injectable()
export class FibersService {
  constructor(
    private http: HttpClient
  ) { }

  // fetchAll(): Observable<Fiber[]> {
  //   return this.http.get<Fiber[]>(baseUrl + '');
  // }
}
