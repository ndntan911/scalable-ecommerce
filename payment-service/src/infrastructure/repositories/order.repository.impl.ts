import { CheckoutDto, OrderDataSource, OrderRepository } from '../../domain';

export class OrderRepositoryImpl implements OrderRepository {
  constructor(private readonly orderDataSource: OrderDataSource) {}

  getOrder(checkoutDto: CheckoutDto): Promise<Response> {
    return this.orderDataSource.getOrder(checkoutDto);
  }

  updateOrder(
    userId: string,
    orderId: string,
    address: string,
  ): Promise<Response> {
    return this.orderDataSource.updateOrder(userId, orderId, address);
  }
}
