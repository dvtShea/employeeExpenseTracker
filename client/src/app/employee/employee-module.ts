import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from '../mat-components/mat-components-module';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeHome } from './employee-home/employee-home';

import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetail } from './employee-detail/employee-detail';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatComponentsModule,
    EmployeeList,
    EmployeeHome,
    ReactiveFormsModule,
    EmployeeDetail,
  ],
})
export class EmployeeModule {}
