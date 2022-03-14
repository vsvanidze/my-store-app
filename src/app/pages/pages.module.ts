import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class PagesModule { }
