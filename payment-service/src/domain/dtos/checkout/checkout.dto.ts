import { checkoutSchema, ZodAdapter } from '../../../config';
import { ValidationResult } from '../../';

interface CheckoutDtoProps {
  userId: string;
  orderId: string;
}

export class CheckoutDto {
  private constructor(
    public readonly orderId: string,
    public readonly userId: string,
  ) {}

  static create(props: CheckoutDtoProps): ValidationResult<CheckoutDto> {
    const { errors, validatedData } = ZodAdapter.validate(
      checkoutSchema,
      props,
    );

    return errors ? { errors } : { validatedData };
  }
}
