import { envs } from '../../config';
import { CheckoutDto, OrderDataSource } from '../../domain';

export class OrderDataSourceImpl implements OrderDataSource {
  async getOrder(checkoutDto: CheckoutDto): Promise<Response> {
    const { orderId, userId } = checkoutDto;
    return fetch(`${envs.ORDER_API_URL}/${userId}/${orderId}`);
  }

  async updateOrder(
    userId: string,
    orderId: string,
    address: string,
  ): Promise<Response> {
    return fetch(`${envs.ORDER_API_URL}/${userId}/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'paid',
        address,
      }),
    });
  }
}
