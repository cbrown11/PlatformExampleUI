import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  
  contacts: any[] | undefined;
  loading = true;
  error: any;
  
  
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query<any>({
        query: gql`
        {
          contacts {
            contactId
            userId
            firstName
            lastName
          }
        }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.contacts = data && data.contacts;
          this.loading = loading;
        },
        error => {
          this.loading = false;
          this.error = error;
          console.log(
            `[GraphQL error]: Message: ${error.Message}`,
          );

        }
      );
}

}
