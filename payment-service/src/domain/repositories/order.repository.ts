import { CheckoutDto } from '../';

export abstract class OrderRepository {
  abstract getOrder(checkoutDto: CheckoutDto): Promise<Response>;
  abstract updateOrder(
    userId: string,
    orderId: string,
    address: string,
  ): Promise<Response>;
}
