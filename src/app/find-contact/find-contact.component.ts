import { Component, OnInit, Output, Input} from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { ContactDetail } from '../models/contact';

@Component({
  selector: 'app-find-contact',
  templateUrl: './find-contact.component.html',
  styleUrls: ['./find-contact.component.css']
})
export class FindContactComponent  {


  @Input() 
  contactId: string = "" ;

  public contact: ContactDetail | undefined;
  public loading = false;
  public error: string | undefined;
  
  constructor(private apollo: Apollo) {
/*
    this.contact = {
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
    };*/
  }

  findContact() {
    this.error = "";
    this.loading = true;
    this.apollo
      .query<any>({
        query: gql`  
        query($id: String!) {
          contact(id: $id) {
            userId
            firstName
            lastName
            emailAddress
            dateOfBirth
            address {
              city
              houseNameNumber
              postcode
              street
              country {
                name
              }
            }
          }
        }
        `,
        variables: {
          id: this.contactId
        }
      })
      .subscribe(({ data, loading }) => {
        if (data.contact) this.contact = data.contact;
        else this.error = "Contact does not exits";
        this.loading = loading;
      });
    }
}
