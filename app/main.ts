import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import  {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {EmployeeService} from './app.service';

@NgModule({
    imports: [BrowserModule,FormsModule,HttpModule],
    declarations: [AppComponent],
    providers:[EmployeeService],
    bootstrap:[AppComponent]
})
class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
