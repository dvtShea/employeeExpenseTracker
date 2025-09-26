import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { EmployeeHome } from './employee/employee-home/employee-home';
import { ExpenseHome } from './expense/expense-home/expense-home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Exercises - Home' },

  { path: 'home', component: Home, title: 'Exercises - Home' },

  { path: 'employees', component: EmployeeHome, title: 'Exercises - Employees' },

  { path: 'expenses', component: ExpenseHome, title: 'Exercises - Expenses' },
];
