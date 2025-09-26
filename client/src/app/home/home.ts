import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

//import { MatComponentsModule } from '../mat-components/mat-components-module';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    //MatComponentsModule,
  ],
  standalone: true,
  templateUrl: './home.html',
})
export class Home {}
