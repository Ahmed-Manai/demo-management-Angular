
import { NgModule} from "@angular/core";
import { AppComponent } from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {ProductListComponent} from "./products/product-list.component";
import {FormsModule} from "@angular/forms"
import { ConvertToSpacePipe } from "./shared/convert-to-spcaces.pipe";

@NgModule({
declarations: [AppComponent, ProductListComponent, ConvertToSpacePipe],
imports: [BrowserModule, FormsModule],
bootstrap: [AppComponent] 

})
export class AppModule{

}





















// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
