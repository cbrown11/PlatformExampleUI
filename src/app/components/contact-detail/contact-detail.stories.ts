import { APP_INITIALIZER } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, fas, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { ContactDetailComponent } from './contact-detail.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';

storiesOf('Components/ContactDetailComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [ FontAwesomeModule ],
      declarations: [ ContactDetailComponent ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => {
            return async () => {
              iconLibrary.addIconPacks(fas);
              iconLibrary.addIcons(faUserTie);
              iconLibrary.addIcons(faEnvelope);
            };
          },
          deps: [ FaIconLibrary ],
          multi: true,
        },
      ]
    }),
  )
  .add('default', () => {
    return {
      template: `<app-contact-detail [contact]="contact"></app-contact-detail>`,
      props: {
        contact: {
          contactId: '1',
          userId: 'jd',
          firstName: 'John',
          lastName: 'Doe',
          dateOfBirth: '11/01/2009',
          emailAddress: 'user@test.com',
          address: {
            houseNameNumber: '1',
            city: 'London',
            country: { 
              name: 'England'
            },
            postcode: 'SW1 2E2',
            street: 'Test street'
          }
        }
      }
    };
  })
  .add('different person', () => {
    return {
      template: `<app-contact-detail [contact]="contact"></app-contact-detail>`,
      props: {
        contact: {
          contactId: '1',
          userId: 'de',
          firstName: 'Derek',
          lastName: 'Eric',
          dateOfBirth: '11/01/2009',
          emailAddress: 'user@test.com',
          address: {
            houseNameNumber: '1',
            city: 'London',
            country: { 
              name: 'England'
            },
            postcode: 'SW1 2E2',
            street: 'Test street'
          }
        }
      }
    };
  });
