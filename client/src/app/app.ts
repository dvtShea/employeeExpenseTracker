import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

// added MaterialUI imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatComponentsModule } from './mat-components/mat-components-module';
import { Home } from './home/home';
import { Employee } from './employee/employee';
import { EmployeeModule } from './employee/employee-module';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatComponentsModule,
    EmployeeModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title: string = '';
  constructor(private location: Location) {
    let path = location.path();
    if (path && path.length > 1) {
      let header = path.substring(1, 2).toUpperCase();
      header += path.substring(2);
      this.setTitle(header);
    } else if (path === '') {
      this.setTitle('');
    }
  }
  setTitle(header: string) {
    this.title = header ? header : 'Home';
  }
}
