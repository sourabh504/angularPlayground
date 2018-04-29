import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from "./contacts/contacts.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { DefaultComponent } from "./default/default.component";


const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  
  { path: 'contacts', component: ContactsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '', component: DefaultComponent, pathMatch: 'full' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],

  declarations: []
})
export class AppRoutingModule {



}