import { ValidationResult } from '../../';
import { ZodAdapter } from '../../../config';
import { addItemSchema } from '../../../config/schemas/cart/cart-dtos.schema';

interface AddItemDtoProps {
  productId: string;
  quantity: number;
}

export class AddItemDto {
  private constructor(
    public productId: string,
    public quantity: number,
  ) {}

  static addItem(props: AddItemDtoProps): ValidationResult<AddItemDto> {
    const { errors, validatedData } = ZodAdapter.validate(addItemSchema, props);

    return errors ? { errors } : { validatedData };
  }
}
