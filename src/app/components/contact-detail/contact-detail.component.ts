import { Component, Input} from '@angular/core';
import { ContactDetail } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent  {
  @Input() contact: ContactDetail | undefined;
  
}
