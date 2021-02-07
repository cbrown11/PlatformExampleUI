import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { FindContactComponent } from "./find-contact/find-contact.component";

const routes: Routes = [
  { path: "find", component: FindContactComponent },
  { path: "", component: ContactsComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
