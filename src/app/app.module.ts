import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './template/home/home.component';
import { CreateComponent } from './Application/create/create.component';
import { ListComponent } from './Application/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from 'primeng/inputtext';
import { ListmenuComponent } from './Menu/listmenu/listmenu.component';
import { CreatemenuComponent } from './Menu/createmenu/createmenu.component';
import { UpdateComponent } from './Application/update/update.component';
import { UpdatemenuComponent } from './Menu/updatemenu/updatemenu.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    ListmenuComponent,
    CreatemenuComponent,
    UpdateComponent,
    
    UpdatemenuComponent,
         FooterComponent,
         HeaderComponent
   
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    MenubarModule,
    AppRoutingModule,
    CalendarModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
