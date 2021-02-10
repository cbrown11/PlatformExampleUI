import { Component, Input} from '@angular/core';
import { ContactDetail } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent  {
  @Input() contacts: ContactDetail[] = [];
}
