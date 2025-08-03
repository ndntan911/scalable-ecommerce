import { Stripe } from 'stripe';
import { Item } from '../../domain';

export interface StripeService {
  createCheckoutSession(
    items: Item[],
    orderId: string,
    userId: string,
  ): Promise<string | null>;
  constructEvent(body: Buffer, signature: string): Promise<Stripe.Event>;
}
