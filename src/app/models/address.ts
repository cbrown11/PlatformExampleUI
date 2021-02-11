export interface Address {
   houseNameNumber: string,
   street: string,
   city: string,
   postcode: string,
   country: Country
}

export interface Country {
    name: string
}