import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SelectServiceComponent } from './select-service/select-service.component';
import { HireServiceComponent } from './hire-service/hire-service.component';
import { SelectedDetailsComponent } from './selected-details/selected-details.component';
import { LoginComponent } from './login/login.component';
import { BookRequestComponent } from './book-request/book-request.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  
   
    { path: 'hire-service',component: HireServiceComponent },
    { path: 'subcategory',component:SubcategoryComponent } ,
    { path: 'selected-details',component:SelectedDetailsComponent } ,
    { path: 'select-service',component: SelectServiceComponent},
    { path: 'book-request',component: BookRequestComponent},
    { path: 'login',component:LoginComponent},
     { path: '',component:RegistrationComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
