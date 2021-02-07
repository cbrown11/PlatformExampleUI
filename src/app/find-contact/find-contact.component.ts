import { Component, OnInit, Output, Input} from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: 'app-find-contact',
  templateUrl: './find-contact.component.html',
  styleUrls: ['./find-contact.component.css']
})
export class FindContactComponent  {


  @Input() 
  contactId: string = "" ;

  contact: any = {};
  loading = false;
  error: string | undefined;
  constructor(private apollo: Apollo) {}


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
