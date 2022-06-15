import { Products } from './product';
import { Users } from './Users';
export interface Orders {
  OrderId: number;
  OrderDate: any;
  Products: Products[]
  PaymentType: string
  totalPrice?: number
  user?: Users,
  UserId: string
}
