import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ContactListComponent } from './contact-list.component';

storiesOf('Components/ContactListComponent', module)
.addDecorator(
  moduleMetadata({
    declarations: [ ContactListComponent]})
  )
  .add('default', () => {
    return {
      template: `<app-contact-list [contacts]="contacts"></app-contact-list>`,
      props: {
        contacts: [{
          contactId: '1',
          userId: 'jd',
          firstName: 'John',
          lastName: 'Doe',
          dateOfBirth: '11/01/2009',
          emailAddress: 'test@test.com',
          address: {
            houseNameNumber: '1',
            city: 'London',
            country: { 
              name: 'England'
            },
            postcode: 'SW1 2E2',
            street: 'Test street'
          }
        },
        {
          contactId: '2',
          userId: 'jd',
          firstName: 'John',
          lastName: 'Doe',
          dateOfBirth: '11/01/2009',
          emailAddress: 'test@test.com',
          address: {
            houseNameNumber: '1',
            city: 'London',
            country: { 
              name: 'England'
            },
            postcode: 'SW1 2E2',
            street: 'Test street'
          }
        }]
      }
    };
  });
