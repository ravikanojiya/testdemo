import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { UsersComponent } from "./users/users.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { DataTablesModule } from 'angular-datatables';
import { FavouritComponent } from "./favourit/favourit.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { ProgressBarModule } from "primeng/progressbar";
import { ButtonModule } from "primeng/button";
import { MessageService } from "primeng/api";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    FavouritComponent,
  ],
  imports: [
    BrowserModule,
    TableModule,
    FormsModule,
    ProgressBarModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // DataTablesModule,
    AppRoutingModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
