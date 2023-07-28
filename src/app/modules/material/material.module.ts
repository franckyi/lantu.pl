import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'; 
// import {MatDividerModule} from '@angular/material/divider';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatSelectModule} from '@angular/material/select';
// import {MatInputModule} from '@angular/material/input';
// import {MatTableModule} from '@angular/material/table';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule
    // MatDividerModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatInputModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatListModule
  ]
})
export class MaterialModule { }
