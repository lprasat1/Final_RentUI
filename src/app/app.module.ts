import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectServiceComponent } from './select-service/select-service.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SelectedDetailsComponent } from './selected-details/selected-details.component';
import { BookRequestComponent } from './book-request/book-request.component';
import { RegistrationComponent } from './registration/registration.component';
import { HireServiceComponent } from './hire-service/hire-service.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { BookhistoryComponent } from './bookhistory/bookhistory.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectServiceComponent,
    SubcategoryComponent,
    SelectedDetailsComponent,
    BookRequestComponent,
    RegistrationComponent,
    HireServiceComponent,
    LoginComponent,
    BookhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
