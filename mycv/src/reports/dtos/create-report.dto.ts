import { IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateReportDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  //   @IsNumber()
  //   @Min(0)
  //   @Max(1000000)
  //   price: number;
}
