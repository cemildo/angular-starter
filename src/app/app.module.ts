import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { MainComponent} from './components/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HomeModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
