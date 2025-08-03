import { z } from 'zod';
import { CheckoutDto } from '../../domain';

export const checkoutSchema: z.ZodType<CheckoutDto> = z.object({
  userId: z.string().trim().nonempty('User ID is required'),
  orderId: z.string().trim().nonempty('Order ID is required'),
});
