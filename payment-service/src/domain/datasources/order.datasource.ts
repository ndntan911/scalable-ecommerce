import { CheckoutDto } from '../dtos/checkout/checkout.dto';

export abstract class OrderDataSource {
  abstract getOrder(checkoutDto: CheckoutDto): Promise<Response>;
  abstract updateOrder(
    userId: string,
    orderId: string,
    address: string,
  ): Promise<Response>;
}
