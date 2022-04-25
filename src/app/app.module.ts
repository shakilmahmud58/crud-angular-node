import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:"myfile", component: FirstComponent },
      { path:"secondone", component: SecondComponent },
      { path:"home", component: HomeComponent },
      { path:"" , redirectTo:'/home', pathMatch:"full" },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
