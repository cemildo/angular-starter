import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app.routes';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
