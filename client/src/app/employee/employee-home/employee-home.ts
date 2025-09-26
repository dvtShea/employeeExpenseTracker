import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EmployeeList } from '../employee-list/employee-list';

import { MatComponentsModule } from '../../mat-components/mat-components-module';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EmployeeDetail } from '../employee-detail/employee-detail';

import { GenericHttpService } from '../../generic-http';

@Component({
  templateUrl: 'employee-home.html',
  imports: [
    MatCardModule,
    MatListModule,
    EmployeeList,
    MatComponentsModule,
    CommonModule,
    EmployeeDetail,
  ],
})
export class EmployeeHome implements OnInit {
  msg: string;
  employees$?: Observable<Employee[]>;
  employee: Employee;
  hideEditForm: boolean;
  initialLoad: boolean;

  constructor(public employeeService: EmployeeService) {
    this.employee = {
      id: 0,
      title: '',
      firstname: '',
      lastname: '',
      phoneno: '',
      email: '',
    };
    this.msg = '';
    this.hideEditForm = true;
    this.initialLoad = true;
  } // constructor

  ngOnInit(): void {
    this.msg = `Loading...`;
    this.getAll();
  }

  getAll(): void {
    this.employees$ = this.employeeService.getAll();
    this.employees$.subscribe({
      error: (e: Error) => (this.msg = `Couldn't get employees - ${e.message}`),
      complete: () => (this.msg = `Employees loaded!`),
    });
  }

  select(employee: Employee): void {
    this.employee = employee;
    this.msg = `${employee.lastname} selected`;
    this.hideEditForm = false;
  }

  cancel(msg?: string): void {
    msg ? (this.msg = 'Operation cancelled') : null;
    this.hideEditForm = true;
  }

  update(employee: Employee): void {
    this.employeeService.update(employee).subscribe({
      // Create observer object
      next: (emp: Employee) => {
        this.msg = `Employee ${emp.id} updated!`;
        this.getAll(); // refresh the list
      },
      error: (err: Error) => (this.msg = `Update failed! - ${err.message}`),
      complete: () => {
        this.hideEditForm = true;
      },
    });
  } // update

  save(employee: Employee): void {
    employee.id ? this.update(employee) : this.add(employee);
  }

  add(employee: Employee): void {
    employee.id = 0;
    this.employeeService.create(employee).subscribe({
      // Create observer object
      next: (emp: Employee) => {
        this.msg = `Employee ${emp.id} added!`;
        this.getAll(); // refresh the list
      },
      error: (err: Error) => (this.msg = `Employee not added! - ${err.message}`),
      complete: () => (this.hideEditForm = true),
    });
  } // add

  delete(employee: Employee): void {
    this.employeeService.delete(employee.id).subscribe({
      // Create observer object
      next: (numOfEmployeesDeleted: number) => {
        numOfEmployeesDeleted === 1
          ? (this.msg = `Employee ${employee.lastname} deleted!`)
          : (this.msg = `employee not deleted`);

        this.getAll(); // refresh the list
      },
      error: (err: Error) => (this.msg = `Delete failed! - ${err.message}`),
      complete: () => (this.hideEditForm = true),
    });
  }

  newEmployee(): void {
    this.employee = {
      id: 0,
      title: '',
      firstname: '',
      lastname: '',
      phoneno: '',
      email: '',
    };
    this.hideEditForm = false;
    this.msg = 'New Employee';
  }
} // EmployeeHome
