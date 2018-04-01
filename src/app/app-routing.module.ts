import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from "./contacts/contacts.component";
import { AboutusComponent } from "./aboutus/aboutus.component";


const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'aboutus', component: AboutusComponent }
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
