import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactsComponent } from './contacts/contacts.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FindContactComponent } from './find-contact/find-contact.component';
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { ContactDetailComponent } from "./components/contact-detail/contact-detail.component";
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faStar, fas, faEnvelope, faUserTie } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [AppComponent, ContactsComponent, FindContactComponent, ContactListComponent, ContactDetailComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas);
    iconLibrary.addIcons(faUserTie);
    iconLibrary.addIcons(faEnvelope);
  }
}
