import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    ComponentsModule, 
    CoreModule, 
    PagesModule, 
    BrowserAnimationsModule, 
    HttpClientModule, 
    RouterModule.forRoot(
      [
        { path: "", component: SearchComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
