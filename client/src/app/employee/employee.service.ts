import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from '../constants';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { GenericHttpService } from '../generic-http';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends GenericHttpService<Employee> {
  resourceURL: string;
  constructor(http: HttpClient) {
    super(http, `employees`);
    this.resourceURL = `${BASE_URL}/api/employees`;
  } // constructor
} // EmployeeService
