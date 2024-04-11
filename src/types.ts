import { CartItemType } from './components/pages/Checkout/CartItem';
import { ECheese, EMeat, ESauce, EVeggie } from './enums';

export interface Address {
  line1: string;
  line2: string;
  city: string;
  province: string;
}

export interface User {
  email: string;
  firstName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  contact?: string;
}

export interface Ingredient<IngredientEnum> {
  key: IngredientEnum;
  label: string;
}

export interface Pizza {
  sauce: ESauce;
  cheese: ECheese;
  meats?: EMeat[];
  veggies?: EVeggie[];
}

export interface MyAlertProps {
  open: boolean;
  alertType: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

export interface Order {
  email: string;
  id: string;
  items: CartItemType[];
  total: number;
  address: Address;
  orderDate: string;
  paymentType: string;
}
