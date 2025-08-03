import { z } from 'zod';
import { AddItemDto } from '../../../domain';

export const addItemSchema: z.ZodType<AddItemDto> = z.object({
  productId: z.string().trim().nonempty('Product ID is required'),
  quantity: z.number().positive('Quantity must be positive'),
});
