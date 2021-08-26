import * as Yup from 'yup'

export interface ICreateAccount {
  accountType: string
  accountTeamSize: string
  firstname: string
  lastname:string
  country:string
  accountPlan: string
  businessName: string
  businessDescriptor: string
  businessType: string
  businessDescription: string
  businessEmail: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
}

const createAccountSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
  Yup.object({
    firstname: Yup.string().required().label('First Name'),
  }),
  Yup.object({
    lastname: Yup.string().required().label('Last Name'),
  }),
  Yup.object({
    country: Yup.string().required().label('country'),
  }),
  Yup.object({
    businessName: Yup.string().required().label('Business Name'),
    businessDescriptor: Yup.string().required().label('Shortened Descriptor'),
    businessType: Yup.string().required().label('Corporation Type'),
    businessEmail: Yup.string().required().label('Contact Email'),
  }),
  Yup.object({
    nameOnCard: Yup.string().required().label('Name On Card'),
    cardNumber: Yup.string().required().label('Card Number'),
    cardExpiryMonth: Yup.string().required().label('Expiration Month'),
    cardExpiryYear: Yup.string().required().label('Expiration Year'),
    cardCvv: Yup.string().required().label('CVV'),
  }),
]

const inits: ICreateAccount = {
  accountType: 'personal',
  accountTeamSize: '50+',
  firstname: '',
  lastname:'',
  country:'',
  accountPlan: '1',
  businessName: 'Keenthemes Inc.',
  businessDescriptor: 'KEENTHEMES',
  businessType: '1',
  businessDescription: '',
  businessEmail: 'corp@support.com',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2',
  cardCvv: '123',
  saveCard: '1',
}

export {createAccountSchemas, inits}
