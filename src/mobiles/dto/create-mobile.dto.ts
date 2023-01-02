import { IsString } from 'class-validator';

export class CreateMobileDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
