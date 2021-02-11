import { Address } from "./address";
export interface ContactDetail {
    contactId: string
    userId: string
    firstName: string
    lastName: string,
    emailAddress: string,
    dateOfBirth: string,
    address: Address
}
