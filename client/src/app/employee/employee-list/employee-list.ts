import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [MatListModule, CommonModule],
  template: `
    <mat-list-item
      *ngFor="let employee of employees"
      layout="row"
      class="pad-xs mat-title"
      (click)="selected.emit(employee)"
    >
      {{ employee.id }} - {{ employee.firstname }}, {{ employee.lastname }}
    </mat-list-item>
  `,
})
export class EmployeeList {
  @Input() employees?: Employee[];
  @Output() selected = new EventEmitter();
} // EmployeeList
