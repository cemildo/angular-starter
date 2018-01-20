import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
