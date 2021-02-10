import { Story, Meta } from '@storybook/angular/types-6-0';
import { ContactListComponent } from './contact-list.component';

export default {
  title: 'Components/ContactListComponent',
  component: ContactListComponent,
  argTypes: {},
} as Meta;

const Template: Story<ContactListComponent> = (args: ContactListComponent) => ({
  component: ContactListComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  contacts: [
    {
      contactId: '1',
      userId: 'jd',
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      contactId:'2',
      userId: 'ss',
      firstName: 'Sam',
      lastName: 'Smith',
    }
  ]
};
