import { IsString, IsNumber, Min, Max } from 'class-validator';

export class GetEstimateDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  //   @IsNumber()
  //   @Min(0)
  //   @Max(1000000)
  //   price: number;
}
