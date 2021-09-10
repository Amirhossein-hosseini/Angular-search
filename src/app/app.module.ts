import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule, } from '@progress/kendo-angular-grid';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs"
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { data } from './data.model';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    InputsModule,
    LabelModule,
    HttpClientModule,
    InputsModule,
    FormsModule,
    ListViewModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    DropDownsModule,
    LabelModule,
    BrowserAnimationsModule


  ],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
