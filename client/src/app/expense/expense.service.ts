import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from '../constants';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { GenericHttpService } from '../generic-http';

import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService extends GenericHttpService<Expense> {
  resourceURL: string;
  constructor(http: HttpClient) {
    super(http, `expenses`);
    this.resourceURL = `${BASE_URL}/expenses`;
  } // constructor

  getSome(employeeId: number): Observable<Expense[]> {
    return this.http
      .get<Expense[]>(`${this.resourceURL}/employee/${employeeId}`)
      .pipe(retry(1), catchError(this.handleError));
  }
}
